
import Task from "@/components/task/Task";
// import { rectSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import Task from "../task/Task";
import PropTypes from "prop-types";
import DropArea from "../DropArea/DropArea";
// import { useEffect, useState } from "react"

export default function Column2({tasks,refetch,setActiveCard}) {
 
  return (
    <div className="mt-6 space-y-4 ">
           {/* <SortableContext items={tasks.map(task=>task._id)} strategy={verticalListSortingStrategy}> */}
      <DropArea></DropArea>
{
            tasks?.filter(task=>task.category === 'In Progress')
            .map((task,i)=><div key={i}>
            <Task  id={task._id} refetch={refetch} setActiveCard={setActiveCard}  task={task}/>
            <DropArea />
            </div> 
            )
           }

           {/* </SortableContext> */}
    </div>
  )
}

Column2.propTypes = {
  tasks: PropTypes.array.isRequired,
};