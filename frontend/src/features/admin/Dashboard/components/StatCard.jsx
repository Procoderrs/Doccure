import React from 'react'
import { RiArrowUpLine, RiArrowDownLine } from "@remixicon/react"

function formatValue(value, isCurrency) {
  if (isCurrency) {
    return `$${value.toLocaleString()}`
  }
  return value.toLocaleString()
}

function Sparkline({ data, color }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 30 - ((v - min) / range) * 28
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg viewBox="0 0 100 30" className="w-20 h-8" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function StatCard({ label, value, trend, icon: Icon, accent, accentSoft, spark, isCurrency }) {
  const isPositive = trend >= 0

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: accentSoft, color: accent }}
        >
          <Icon size={22} />
        </div>
        <Sparkline data={spark} color={accent} />
      </div>

      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-gray-900">{formatValue(value, isCurrency)}</p>
        <span
          className={`flex items-center gap-0.5 text-xs font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <RiArrowUpLine size={12} /> : <RiArrowDownLine size={12} />}
          {Math.abs(trend)}%
        </span>
      </div>
    </div>
  )
}