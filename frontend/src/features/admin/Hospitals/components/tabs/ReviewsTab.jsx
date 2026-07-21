import React from 'react'
import { RiStarFill } from "@remixicon/react"

export default function ReviewsTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Reviews</h3>
      <div className="flex flex-col divide-y divide-gray-100">
        {hospital.reviews.map((r, i) => (
          <div key={i} className="py-4">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-gray-900">{r.patient}</p>
              <span className="text-xs text-gray-400">{r.date}</span>
            </div>
            <div className="flex items-center gap-0.5 mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <RiStarFill key={i} size={14} className={i < r.rating ? "text-yellow-400" : "text-gray-200"} />
              ))}
            </div>
            <p className="text-sm text-gray-600">{r.comment}</p>
          </div>
        ))}
        {hospital.reviews.length === 0 && (
          <p className="text-center py-8 text-gray-400">No reviews yet.</p>
        )}
      </div>
    </div>
  )
}