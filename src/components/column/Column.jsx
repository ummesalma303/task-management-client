// import React from 'react'

// import useAxiosPublic from "@/hooks/useAxiosPublic"
// import { AuthContext } from "@/providers/AuthProvider";

// import { useQuery } from "@tanstack/react-query"
// import { useContext } from "react";
import {  SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "../task/Task";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react"

export default function Column({tasks,refetch}) {
    // const {user} = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    // get tasks


// const { data: tasks = [], isLoading } = useQuery({
//     queryKey: ["tasks",user],
//     queryFn: async ({tasks}) => {
//       const res = await axiosPublic.get(`/tasks`);
//       return res.data;
//     },
//   });
//   if (isLoading) {
//     return <h2>loading.....</h2>
//   }
  // console.log(tasks)
  return (
    <div className="mt-6 space-y-4 ">
           {/* <SortableContext items={tasks.map(task=>task._id)} strategy={verticalListSortingStrategy}> */}
      {/* {
       tasks?.map(task => (
           <Task key={task._id} id={task._id} task={task}/>
        ))
      } */}

{
            tasks?.filter(task=>task.category === 'To-Do')
            .map(task=> <Task key={task._id} id={task._id} task={task} refetch={refetch}/>)
           }

           {/* </SortableContext> */}
    </div>
  )
}



Column.propTypes = {
  tasks: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
};