'use client'


import StatusCard from "@/kanban-board/status-card";
import {Dispatch, SetStateAction} from "react";

type KanbanBoardProps = {
    tasks: {name: string, status: number}[];
    setTasks:Dispatch<SetStateAction<{name: string, status: number }[]>>
}

export default function KanbanBoard({tasks, setTasks}: KanbanBoardProps) {
    return (
        <div className={'bg-pink-800 h-full flex items-center justify-around'}>
            <StatusCard tasks={tasks} setTasks={setTasks} status={{id:0, name: 'Backlog'}}/>
            <StatusCard tasks={tasks} setTasks={setTasks} status={{id:1, name: 'To Do'}}/>
            <StatusCard tasks={tasks} setTasks={setTasks} status={{id:2, name: 'Ongoing'}}/>
            <StatusCard tasks={tasks} setTasks={setTasks} status={{id:3, name: 'Done'}}/>
        </div>
    )
}