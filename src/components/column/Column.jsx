// import React from 'react'

// import useAxiosPublic from "@/hooks/useAxiosPublic"
// import { AuthContext } from "@/providers/AuthProvider";

// import { useQuery } from "@tanstack/react-query"
// import { useContext } from "react";
import {  SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "../task/Task";
import PropTypes from "prop-types";
import DropArea from "../DropArea/DropArea";
import React from "react";
// import { useEffect, useState } from "react"

export default function Column({tasks,refetch,setActiveCard,onDrop}) {

  return (
    <div className="mt-6 space-y-4 ">
          
  <DropArea></DropArea>

{
            tasks?.filter((task)=>task.category === 'To-Do')
            .map(task=><React.Fragment  key={task._id}>
            <Task id={task._id} task={task} refetch={refetch} onDrop= {task.order} setActiveCard={setActiveCard}/>
            <DropArea></DropArea>
            </React.Fragment> )
           }

          
    </div>
  )
}



Column.propTypes = {
  tasks: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
};