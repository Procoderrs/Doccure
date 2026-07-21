import React from 'react'
import StatCard from './StatCard'
import { dashboardStats } from '../../../../data/dashboardStats'

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {dashboardStats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  )
}