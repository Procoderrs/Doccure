import React from 'react'

const styles = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-600",
  blocked: "bg-red-100 text-red-600",
}

export default function StatusBadge({ status }) {
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${styles[status]}`}>
      {status}
    </span>
  )
}