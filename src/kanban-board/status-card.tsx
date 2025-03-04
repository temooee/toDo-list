'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";

type StatusCardProps = {
    status: { id: number, name: string };
}

export default function StatusCard ({status}: StatusCardProps) {
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
    console.log(tasks)
    return (
        <Card className={'h-[60vh] w-[20vw]'}>
            <CardHeader className={'md: text-lg lg:text-xl sm: text-md text-blue-200 flex items-center justify-center '}>
                <CardTitle>
                    {status.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {tasks.map((task, index) => {
                    return (
                        status.id === task.status && <div key={index} className={'flex justify-between'}>
                       <div>
                           {task.name}
                       </div>
                       <div className={'flex gap-1 max-w-10 lg:max-w-fit sm:max-w-15'}>
                            {/*// left-arrow*/}
                           <svg onClick={() => {
                               const newTasks = tasks
                               newTasks[index].status = newTasks[index].status-1
                               setTasks(newTasks)
                           }}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#7ed321"} fill={"none"}>
                                <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/*//right-arrow*/}
                            <svg onClick={() => {
                                const newTasks = tasks
                                newTasks[index].status = newTasks[index].status+1
                                setTasks(newTasks)
                            }}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#66af1b"} fill={"none"}>
                                <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/*delete*/}
                            <svg onClick={() => {
                                console.log(1)
                            }}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#d0021b"} fill={"none"}>
                                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                       </div>
                    </div>
                    )
                }
                )}
            </CardContent>
        </Card>
    )
}