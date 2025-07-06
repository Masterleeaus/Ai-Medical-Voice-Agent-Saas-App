"use client"

import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader2 } from 'lucide-react'
import axios from 'axios'
import DoctorAgentCard, { doctorAgent } from './DoctorAgentCard'
import SuggestedDoctorCard from './SuggestedDoctorCard'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { SessionDetail } from '../medical-agent/[sessionId]/page'


const AddNewSessionsDialogue = () => {
    const [note, setNote] = React.useState<string>();
    const [loading, setLoading] = React.useState(false);
    const [suggestedDoctors, setSuggestedDoctors] = React.useState<doctorAgent[]>();
    const [selectedDoctor, setSelectedDoctor] = React.useState<doctorAgent>();
    const router = useRouter();
    const [historyList , setHistoryList] = React.useState<SessionDetail[]>([]);

    const {has} = useAuth();
      //@ts-ignore
      const PaidUser = has && has({ plan: 'premium' })

      React.useEffect(() => {
          GetHistoryList();
        }, []);
      
      
        const GetHistoryList = async() =>{
          const result = await axios.get('/api/session-chat?sessionId=all');
          setHistoryList(result.data);
          console.log(result.data);
        }
    

    const onClickNext = async() => {
      setLoading(true);
        const result = await axios.post('/api/suggest-doctor', {
            notes: note
        });

        console.log(result.data);
        setSuggestedDoctors(result.data);
        setLoading(false);


    }


    const onStartConsultation = async () =>{
      setLoading(true);
      //save all info to data base
      const result = await axios.post('/api/session-chat', {
        notes: note,
        selectedDoctor: selectedDoctor
      });
      console.log(result.data);

      if(result.data?.sessionId){
        console.log(result.data.sessionId);
        //redirect to the session page
        router.push('/dashboard/medical-agent/' + result.data.sessionId);

      }
      setLoading(false);
    }
  return (
    <Dialog>
  <DialogTrigger>
     <Button disabled={!PaidUser && historyList?.length >= 1}> + Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
        {!suggestedDoctors ?
        <div>
            <h2>Add Symptoms and any other Details</h2>
            <Textarea placeholder='Add Symptoms Details Here...' 
            className='h-[200px] mt-2'
            onChange={(e) => setNote(e.target.value)}
            value={note}
            />
        </div> :
        <div>
          <h2>Select Suggested Doctors</h2>

        <div className='grid grid-cols-2 gap-5'>
           {
            suggestedDoctors.map((doctor, index) =>(
             <SuggestedDoctorCard key={index} doctorAgent={doctor}
             setSelectedDoctor={()=> setSelectedDoctor(doctor)}
             selectedDoctor={selectedDoctor}
             />
            ))}
        </div>
        </div>}
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
        <Button variant="outline" className='ml-2'>Cancel</Button>
        </DialogClose>
        {!suggestedDoctors ?  <Button disabled={!note || loading} type="submit" onClick={() => onClickNext()}> Next {loading ? <Loader2 className='animate-spin'/> : <ArrowRight />} </Button> : <Button disabled={loading || !selectedDoctor} onClick={() => onStartConsultation()}>Start Consultation {loading ? <Loader2 className='animate-spin'/> : <ArrowRight />}</Button>}
        {/* //if loading show loader */}
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default AddNewSessionsDialogue
