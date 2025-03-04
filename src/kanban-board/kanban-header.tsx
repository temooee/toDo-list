'use client'

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function KanbanHeader() {
    // aq unda iyos failis sheqmna
    return (
        <div className={'bg-amber-500 h-[120px] flex gap-5 justify-center items-center text-3xl'}>
            <Input placeholder={'Enter your task'} className={'w-[200px]'}></Input>
            <Button className={'hover:bg-green-900'}>Add Task</Button>
        </div>
    )
}