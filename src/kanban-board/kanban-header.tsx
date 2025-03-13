'use client'

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Dispatch, SetStateAction, useState} from "react";

type KanbanHeaderProps = {
    tasks: {name: string, status: number}[];
    setTasks:Dispatch<SetStateAction<{name: string, status: number }[]>>
}

export default function KanbanHeader({tasks, setTasks}: KanbanHeaderProps) {
    // aq unda iyos taskis sheqmna
    const [taskName, setTaskName] = useState("");

    const addTask = () => {
        if(taskName.length > 0 && taskName.trim() !== "") {
            const shallowTasks = [...tasks];
            shallowTasks.push({name: taskName, status: 0});
            setTasks(shallowTasks);
        }
        setTaskName("")
    }

    return (
        <div className={'bg-amber-500 h-[120px] flex gap-5 justify-center items-center text-3xl'}>
            <Input value={taskName}
                   onKeyUp={(event) => {
                       if (event.key === "Enter") {
                           addTask();
                       }
                   }}
               onChange={
                (event) => {
                    if(event.target.hasOwnProperty('value'))
                        setTaskName(event.target.value);
                }
            } placeholder={'Enter your task'} className={'w-[200px]'}></Input>
            <Button onClick={() => {
                addTask();

            }} className={'hover:bg-green-900'}>Add Task</Button>
        </div>
    )
}