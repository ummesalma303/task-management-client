
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import PropTypes from "prop-types";
// import { Button } from "../ui/button";
// import { FaTrashAlt } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";
// import Swal from "sweetalert2";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import { useForm } from "react-hook-form";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "../ui/input";
// import { DialogClose } from "@radix-ui/react-dialog";

// export default function Task({ task, id ,refetch,setActiveCard}) {
//   // console.log(setActiveCard)
//   const axiosPublic = useAxiosPublic()
//   const {
//     register,
    
//     handleSubmit,
//   } = useForm()
//   const { title, image, category, description,_id } = task;

  
// /* ----------------------------- delete feature ----------------------------- */
//   const handleDelete = (id,e) =>{
//     e.stopPropagation();
    
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosPublic.delete(`/delTasks/${id}`)
//         .then(res => {
//           console.log(res.data)
//           if (res.data.deletedCount > 0) {
//             refetch()
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success"
//             });
//           }
//         })
//         .catch(err => console.log(err))
//       }
//     });

    
//   }

// /* ----------------------------- update features ---------------------------- */
 
//     const onSubmit = (data,id) =>{
//         const tasks = {...data,Timestamp:new Date(),}
//         console.log(id)
//         console.log(data)
//         console.log(task._id)
// // post tasks
//         axiosPublic.patch(`/updateTasks/${task._id}`,tasks)
//         .then(res=>{
//           console.log(res)
//           if (res.data.modifiedCount>0) {
//             refetch()
//              Swal.fire({
//                               title: "Success",
//                               text: "Update successfully",
//                               icon: "success",
//                               // timer: 1000
//                             });
                            
//           }})
//           .catch(err => {
//              Swal.fire({
//                                 title: "Error",
//                                 text:`${err?.message}`,
//                                 icon: "success",
//                                 // timer: 1000
//                               });
//                               // console.log(err)
//                       console.log(err)
//           })
//     }
//     return (
//     <div draggable
//      onDragStart={() => setActiveCard(_id)} onDragEnd={()=>setActiveCard(null)}
//       className="border-[1px] p-5 flex items-center space-x-2 active:border-[1px] active:border-green-300 "
//     >
//       <div>
//         <Avatar className="w-16 h-16">
//           <AvatarImage src={image} alt="@shadcn" />
//           <AvatarFallback>NA</AvatarFallback>
//         </Avatar>
//       </div>
//       <div>
//         <h2>Title: {title}</h2>
//         <h3>Category: {category}</h3>
//         <p>Description: {description}</p>
//         <div className="flex justify-end space-x-2 mt-3">
//         <button onClick={(e)=>handleDelete(_id,e)} type="button" > <FaTrashAlt /></button>
       

//         <Dialog>
//       <DialogTrigger asChild>
//         <button ><CiEdit /></button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when  done.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid gap-4 py-4">
//             {/* input-1 */}
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label  className="text-right">
//             Title
//             </Label>
//             <Input id="title" placeholder="Write a title 0-50" className="col-span-3" max={50} {...register("title", { required: true })} />
          
//           </div>
//           {/* input-2 */}
//           <div className="grid grid-cols-4 items-center ">
//             <Label  className="text-right">
//             Category
//             </Label>
//             <select className='border-2 w-full p-1 rounded-md col-span-3'  {...register("category")}>
//         <option value="To-Do">To-Do</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Done">Done</option>
//       </select><br />
//           </div>
//           {/* input-3 */}
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//             Description
//             </Label>
//             <textarea id="Description" placeholder="Description" className="col-span-3 border-2" required {...register("Description", { required: true })} />
//           </div>
//         </div>
//         <DialogFooter>
//         <DialogClose asChild>
//           <Button type="submit">Update</Button>
//         </DialogClose>
//         </DialogFooter>

//         </form>
//       </DialogContent>
//     </Dialog>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// Task.propTypes = {
//   task: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string,
//     category: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     _id: PropTypes.string.isRequired,
//   }).isRequired,
//   id: PropTypes.string.isRequired,
// };





















import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Task({ task, id ,refetch,setActiveCard}) {
  console.log(setActiveCard)
  const axiosPublic = useAxiosPublic()
  const {
    register,
    formState: { errors },
   
    handleSubmit,
  } = useForm()
  const { title, image, category, description,_id } = task;

  
/* ----------------------------- delete feature ----------------------------- */
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
        .catch(err => {
          
          console.log(err)})
      }
    });

    
  }

/* ----------------------------- update features ---------------------------- */
 
    const onSubmit = (data,id) =>{
        const tasks = {...data,Timestamp:new Date(),}
        console.log(id)
        console.log(data)
        console.log(task._id)
// post tasks
        axiosPublic.patch(`/updateTasks/${task._id}`,tasks)
        .then(res=>{
          console.log(res)
          if (res.data.modifiedCount>0) {
            refetch()
             Swal.fire({
                              title: "Success",
                              text: "Update successfully",
                              icon: "success",
                              // timer: 1000
                            });
                            
          }})
          .catch(err => {
             Swal.fire({
                                title: "Error",
                                text:`${err?.message}`,
                                icon: "err",
                                // timer: 1000
                              });
                              // console.log(err)
                      console.log(err)
          })
    }
    return (
    <div
    draggable
     onDragStart={() => setActiveCard(_id)} onDragEnd={()=>setActiveCard(null)}
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

        {/* <p > <CiEdit /></p> */}

        <Dialog>
      <DialogTrigger asChild>
        <button ><CiEdit /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when  done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
            {/* input-1 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
            Title
            </Label>
            <Input id="title" placeholder="Write a title 0-50" className="col-span-3" max={50} {...register("title", { required: true })} />
          
          </div>
          {/* input-2 */}
          <div className="grid grid-cols-4 items-center ">
            <Label  className="text-right">
            Category
            </Label>
            <select className='border-2 w-full p-1 rounded-md col-span-3'  {...register("category")}>
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select><br />
          </div>
          {/* input-3 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            Description
            </Label>
            <textarea id="Description" placeholder="Description" className="col-span-3 border-2" required {...register("Description", { required: true })} />
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button type="submit">Update</Button>
        </DialogClose>
        </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
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