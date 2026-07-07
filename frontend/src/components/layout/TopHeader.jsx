import React from 'react'
import {  RiChat2Line,RiPhoneFill,RiFacebookCircleLine,RiTwitterXLine,RiInstagramLine,RiLinkedinFill  } from "@remixicon/react";

export default function TopHeader() {
  return (
    <>
    <section className="font-user border-b border-border hidden lg:block ">
      <div className="py-4 mx-auto">
          <div className="px-18">
   <div className="flex items-center justify-between">
{/* left-side */}
 <div className="flex gap-4 items-center ">
  {/* infodiv */}
  <div className="flex items-center">
    <RiChat2Line size={20}/>
 <p className="text-text">info@example.com</p>
  </div>
  {/* phone */}
  <div className="flex items-center">
    <RiPhoneFill size={20}/>
 <p className="text-text">+1 66589 14556</p>
  </div>
 </div>
 {/* right side */}
<div className=" flex gap-2">
<div className="p-1 border-border border text-bg  rounded-full">
  <RiFacebookCircleLine size={20} />
</div>
<div className="p-1 border-border border text-bg   rounded-full">
  <RiTwitterXLine size={20} />
</div>
<div className="p-1 border-border border text-bg  rounded-full">
  <RiInstagramLine size={20} />
</div>
<div className="p-1 border-border border text-bg  rounded-full">
  <RiLinkedinFill size={20} />
</div>
</div>
   </div>
          </div>
      </div>
    </section>
    </>
  )
}
