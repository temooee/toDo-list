'use client'
import KanbanHeader from "@/kanban-board/kanban-header";
import KanbanBoard from "@/kanban-board/kanban-board";
import {useState} from "react";

export default function Home() {

    const [tasks, setTasks] = useState([{
            name: 'Task 1',
            status: 0
        },
            {
                name: 'Task 2',
                status: 3
            },
            {
                name: 'gettt',
                status: 1
            }
        ]
    )

  return (
      <div>
      <KanbanHeader tasks={tasks} setTasks={setTasks}/>
      <KanbanBoard tasks={tasks} setTasks={setTasks}/>
      </div>
  )
}
