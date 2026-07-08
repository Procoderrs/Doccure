import React from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'
import {RiReplyFill } from '@remixicon/react'
const reviews = [
  {
    name: "Adrian", img: "/profile-01.jpg", date: "15 Mar 2024", rating: 4,
    text: "Dr. Edalin Hendry has been my family's trusted doctor for years. Their genuine care and thorough approach to our health concerns make every visit reassuring. Dr. Edalin Hendry's ability to listen and explain complex health issues in understandable terms is exceptional. We are grateful to have such a dedicated physician by our side"
  },
  {
    name: "Kelly", img: "/profile-02.jpg", date: "11 Mar 2024", rating: 4,
    text: "I recently completed a series of dental treatments and couldn't be more pleased with the results and the care I received throughout the process."
  },
   {
    name: "Kelly", img: "/profile-03.jpg", date: "11 Mar 2024", rating: 4,
    text: "I recently completed a series of dental treatments and couldn't be more pleased with the results and the care I received throughout the process."
  },
   {
    name: "Kelly", img: "/profile-04.jpg", date: "11 Mar 2024", rating: 4,
    text: "I recently completed a series of dental treatments and couldn't be more pleased with the results and the care I received throughout the process."
  },
   {
    name: "Kelly", img: "/profile-05.jpg", date: "11 Mar 2024", rating: 4,
    text: "I recently completed a series of dental treatments and couldn't be more pleased with the results and the care I received throughout the process."
  },
]

export default function Reviews() {
  return (
    <div className="p-6">

        <span className="pb-3 mb-3 block border-b border-gray-200 text-2xl font-bold"> Reviews</span>

      {/* Overall Rating */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-5 flex items-center justify-between">
        <div>
          <p className="text-gray-900 text-xl font-bold mb-1">Overall Rating</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-gray-900">4.0</span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <span key={s} className={`text-xl ${s <= 4 ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900">
          📅 06 Jul 26 - 06 Jul 26
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200  p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} className="w-11 h-11 rounded-full object-cover bg-gray-100" />
                <div>
                  <p className=" text-gray-900">{r.name}</p>
                  <p className="text-gray-600 text-sm">{r.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-lg ${s <= r.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-600   mb-3">{r.text}</p>
            <button className="text-gray-500 text-sm flex items-center gap-1 hover:text-[#316dff]">
             <span className="text-gray-800">
               <RiReplyFill  size={15}/>
               </span> Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}