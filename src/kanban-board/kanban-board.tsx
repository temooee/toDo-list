'use client'


import StatusCard from "@/kanban-board/status-card";

export default function KanbanBoard() {
    return (
        <div className={'bg-pink-800 h-full flex items-center justify-around'}>
            <StatusCard status={{id:0, name: 'Backlog'}}/>
            <StatusCard status={{id:1, name: 'To Do'}}/>
            <StatusCard status={{id:2, name: 'Ongoing'}}/>
            <StatusCard status={{id:3, name: 'Done'}}/>
        </div>
    )
}