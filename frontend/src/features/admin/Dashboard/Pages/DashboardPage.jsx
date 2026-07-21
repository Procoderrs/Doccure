import React from 'react'
import StatsGrid from '../components/StatsGrid'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-400">Overview of platform activity</p>
        </div>
        <p className="text-sm text-gray-400">Welcome back, Admin</p>
      </div>

      <StatsGrid />
    </div>
  )
}