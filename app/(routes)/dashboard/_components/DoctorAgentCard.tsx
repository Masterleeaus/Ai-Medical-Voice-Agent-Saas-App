'use client';


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import { IconArrowRight, IconSignRight } from '@tabler/icons-react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export type doctorAgent={
    id: number;
    specialist: string;
    description: string;    
    image: string;
    agentPrompt: string;
    voiceId?: string;
    subscriptionRequired: boolean;
}

type Props = {
    doctorAgent: doctorAgent;
}

const DoctorAgentCard = ({ doctorAgent }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const {has} = useAuth();
  //@ts-ignore
  const PaidUser = has && has({ plan: 'premium' })

const onStartConsultation = async () =>{
      setLoading(true);
      //save all info to data base
      const result = await axios.post('/api/session-chat', {
        notes: 'New Query',
        selectedDoctor: doctorAgent
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
    <div className='relative'>
      {doctorAgent.subscriptionRequired && <Badge className='absolute p-1 right-0'> 
        Premium 
        </Badge>}
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={200}
        height={250}
        className="rounded-lg mb-4 w-full h-[250px] object-cover"/>
        <h3 className="font-bold mb-2">{doctorAgent.specialist}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 mt-1">{doctorAgent.description}</p>
        <Button className='w-full mt-2 items-center'
        onClick={onStartConsultation}
        disabled={!PaidUser && doctorAgent.subscriptionRequired}>
          Start Consultation {loading?<Loader2Icon className='animate-spin'/> : 
          <IconArrowRight/>}</Button>

    </div>
  )
}

export default DoctorAgentCard
