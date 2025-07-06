import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SessionDetail } from '../medical-agent/[sessionId]/page';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import ViewReportDialogue from './ViewReportDialogue';

type props = {
    historyList : SessionDetail[];
}

const HistoryTable = ({ historyList }: props) => {
  return (
    <div>
      <Table>
  <TableCaption>Previous Consultation Report</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[200px]">Ai Medical Specialist</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {historyList.map((record : SessionDetail, index:number) => (
        <TableRow>
      <TableCell className="font-medium">
  {record.selectedDoctor?.specialist || "N/A"}
</TableCell>

      <TableCell>{record.notes}</TableCell>
      <TableCell>{moment(new Date(record.createdOn)).fromNow()}</TableCell>
      <TableCell className="text-right"><ViewReportDialogue record={record} /></TableCell>
    </TableRow>
        ))}
  </TableBody>
</Table>
    </div>
  )
}

export default HistoryTable
