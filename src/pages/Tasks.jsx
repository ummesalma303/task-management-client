import Column from "@/components/column/Column";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { DialogClose } from "@radix-ui/react-dialog";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Column2 from "../components/column/Column2";
import Column3 from "@/components/column/Column3";
import { ReactSortable } from "react-sortablejs";
// import Column2 from "./Column2";

export default function Tasks() {
  const [activeCard,setActiveCard] = useState(null)
  console.log(activeCard)
    const {user} = useContext(AuthContext);
    const queryClient = useQueryClient(); 
    const axiosPublic = useAxiosPublic()
    const {
        register,
        formState: { errors },
       
        handleSubmit,
      } = useForm()
    const onSubmit = (data) =>{
        const tasks = {...data,Timestamp:new Date(),email: user?.email, image: user?.photoURL}
        console.log(tasks)
// post tasks
        axiosPublic.post('/tasks',tasks)
        .then(res=>{
          console.log(res)
          if (res.data.insertedId) {
             Swal.fire({
                              title: "Success",
                              text: "Task successfully added",
                              icon: "success",
                              // timer: 1000
                            });
                            queryClient.invalidateQueries(["tasks"]);
          }})
          .catch(err => {
             Swal.fire({
                                title: "Error",
                                text:`${err?.message}`,
                                icon: "success",
                                // timer: 1000
                              });
                              // console.log(err)
                      console.log(err)
          })
    }

      const { data: tasks = [], isLoading,refetch } = useQuery({
    queryKey: ["tasks", user],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      // console.log(res)
      return res.data;
    },
  });
 
// console.log(task)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  console.log(tasks)

  const onDrop = (order) =>{
    console.log(`${activeCard} is going to place --- at the position ${order}`)
  }
  return (
  
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-8 w-11/12 mx-auto">
        <div className="">
      <h2 className="font-semibold text-2xl pb-2 border-b-2">To-Do</h2>

      
      <div >
      

      <Column tasks={tasks} refetch={refetch} setActiveCard={setActiveCard} onDrop={onDrop} />

      </div>
     
      {/* add task */}
<div  className="pt-2">  
<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
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
            <Input id="title" placeholder="Write a title 0-50" className="col-span-3" max={50} required {...register("title", { required: true })} />
            {errors.title && <span className='text-red-500'>This field is required</span>}
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
          <Button type="submit">Save</Button>
        </DialogClose>
        </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>

</div>
    
        </div>
        <div className="">
      <h2 className="font-semibold text-2xl pb-2 border-b-2">In Progress</h2>
     
      <div >
      

      <Column2 tasks={tasks} refetch={refetch} setActiveCard={setActiveCard} onDrop={onDrop} />

      </div>
     
        </div>
        <div className="">
      <h2 className="font-semibold text-2xl pb-2 border-b-2">Done</h2>
     

<div >


<Column3 tasks={tasks} refetch={refetch} setActiveCard={setActiveCard} onDrop={onDrop} />

</div>

        </div>
<h1> Active card _ {activeCard}</h1>
    </div>

  )
}


