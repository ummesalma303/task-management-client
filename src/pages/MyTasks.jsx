// import React from 'react'

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export default function MyTasks() {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks",user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user?.email}`);
      return res.data;
    },
  });
  console.log(tasks)
  if (isLoading) {
    return <h2>loading.....</h2>
  }
  return (
    <div>
      
    </div>
  )
}
