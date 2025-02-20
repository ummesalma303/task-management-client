
// import './App.css'
// import { buttonVariants } from "@/components/ui/button"

import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { AuthContext } from "./providers/AuthProvider"
function App() {
 const d = useContext(AuthContext);
 console.log(d)
  return (
    <>
     <h1 className='bg-amber-400 font-semibold'>shadcn project</h1>
     <Button>Secondary</Button>
     <Button variant="destructive">Destructive</Button>


    </>
  )
}

export default App
