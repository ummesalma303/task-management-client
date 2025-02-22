
import Task from "@/components/task/Task";
import { rectSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import Task from "../task/Task";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react"

export default function Column2({tasks}) {
 
  return (
    <div className="mt-6 space-y-4 ">
           <SortableContext items={tasks.map(task=>task._id)} strategy={verticalListSortingStrategy}>
     
{
            tasks?.filter(task=>task.category === 'In Progress')
            .map(task=> <Task key={task._id} id={task._id} task={task}/>)
           }

           </SortableContext>
    </div>
  )
}

Column2.propTypes = {
  tasks: PropTypes.array.isRequired,
};