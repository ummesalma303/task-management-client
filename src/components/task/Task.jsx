


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export default function Task({ task, id ,refetch}) {
  const axiosPublic = useAxiosPublic()
  const { title, image, category, description,_id } = task;

  // const {
  //   attributes,
  //   listeners,
  //   setNodeRef,
  //   transform,
  //   transition,
  // } = useSortable({ id: id });

  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition,
  // };
// console.log(_id)
  const handleDelete = (id,e) =>{
    e.stopPropagation();
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/delTasks/${id}`)
        .then(res => {
          console.log(res.data)
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
        .catch(err => console.log(err))
      }
    });

    
  }
    return (
    <div
      // ref={setNodeRef}
      // style={style}
      // {...attributes}
      // {...listeners}
      className="border-[1px] p-5 flex items-center space-x-2 "
    >
      <div>
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h2>Title: {title}</h2>
        <h3>Category: {category}</h3>
        <p>Description: {description}</p>
        <div className="flex justify-end space-x-2 mt-3">
        <button onClick={(e)=>handleDelete(_id,e)} type="button" > <FaTrashAlt /></button>
        {/* <p onClick={(event) => handleDelete(_id, event)}> <FaTrashAlt /></p> */}

        <p > <CiEdit /></p>

        </div>
      </div>
      {/* <div className="">
      </div> */}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};