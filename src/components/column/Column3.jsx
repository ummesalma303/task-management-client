
// import Task from "@/components/task/Task";
import { rectSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import Task from "../task/Task";
import PropTypes from "prop-types";
import Task from "../task/Task";
import DropArea from "../DropArea/DropArea";
// import { useEffect, useState } from "react"

export default function Column3({tasks,setActiveCard,refetch}) {
 
  return (
    <div className="mt-6 space-y-4 ">
           <SortableContext items={tasks.map(task=>task._id)} strategy={verticalListSortingStrategy}>
           <DropArea></DropArea>
     
{
            tasks?.filter(task=>task.category === 'Done')
            .map(task=><>
            <Task key={task._id} id={task._id} task={task} refetch={refetch} setActiveCard={setActiveCard}/>
            <DropArea></DropArea>
            </> )
           }

           </SortableContext>
    </div>
  )
}

Column3.propTypes = {
  tasks: PropTypes.array.isRequired,
};