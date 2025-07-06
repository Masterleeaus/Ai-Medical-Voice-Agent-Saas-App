import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SessionDetail } from '../medical-agent/[sessionId]/page'
import moment from 'moment'

type props ={
  record: SessionDetail
}

const ViewReportDialogue = ({record} : props) => {
  return (
    <Dialog>
  <DialogTrigger>
    <Button variant={"link"} size={"sm"}> View report</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle asChild >
        <h2 className="text-2xl font-bold text-center">
          Medical Voice Agent Report
          </h2>
          </DialogTitle>
      <DialogDescription asChild>
       <div className='mt-12'>
        <h2 className="text-lg font-bold text-blue-500">Vedio Information</h2>

        <div className='grid grid-cols-2'>
        
            <h2> <span className='font-bold'>Doctor Speacialization :</span> {record.selectedDoctor?.specialist}</h2>
            <h2><span className='font-bold'>Consult Date :</span> {moment(new Date (record?.createdOn)).fromNow()}</h2>
   
        </div>
        
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default ViewReportDialogue
