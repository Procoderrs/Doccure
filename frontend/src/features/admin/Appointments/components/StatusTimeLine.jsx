import React from 'react'
import { RiCheckLine } from "@remixicon/react"

export default function StatusTimeline({ timeline }) {
  return (
    <div className="flex flex-col gap-4">
      {timeline.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <RiCheckLine size={14} className="text-white" />
            </span>
            {i < timeline.length - 1 && <span className="w-0.5 flex-1 bg-gray-200 my-1" />}
          </div>
          <div className="pb-2">
            <p className="font-semibold text-gray-900 text-sm">{step.label}</p>
            <p className="text-xs text-gray-400">{step.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}