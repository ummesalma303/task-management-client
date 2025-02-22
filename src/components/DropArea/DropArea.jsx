
import { useState } from "react"

export default function DropArea() {
  const [showDrop,setShowDrop] = useState(false)
  return (
    <section onDragEnter={() => setShowDrop(true)} onDragLeave={() => setShowDrop(false)} className={showDrop?'w-full h-[140px] border-[1px] border-dashed border-[#dcdcdc] rounded-sm p-4 opacity-5 transition-all duration-150 ease-in-out':'opacity-0'}>
      Drop here
    </section>
  )
}
