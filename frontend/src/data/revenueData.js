export const transactionsData = [
  {
    id: "TXN1001",
    type: "Appointment",
    patient: "Hendrita Hayes",
    reference: "Dr. Michael Brown",
    referenceId: "AP1001",
    amount: 300,
    commission: 30,
    doctorEarning: 270,
    paymentStatus: "Paid",
    date: "2026-07-21",
  },
  {
    id: "TXN1002",
    type: "Pharmacy",
    patient: "Hendrita Hayes",
    reference: "PHO1001",
    referenceId: "PHO1001",
    amount: 23,
    commission: 0,
    doctorEarning: 0,
    paymentStatus: "Paid",
    date: "2026-07-18",
  },
  {
    id: "TXN1003",
    type: "Appointment",
    patient: "John Carter",
    reference: "Dr. Michael Brown",
    referenceId: "AP1002",
    amount: 150,
    commission: 15,
    doctorEarning: 135,
    paymentStatus: "Unpaid",
    date: "2026-07-22",
  },
  {
    id: "TXN1004",
    type: "Appointment",
    patient: "Hendrita Hayes",
    reference: "Dr. Edalin Hendry",
    referenceId: "AP0987",
    amount: 200,
    commission: 20,
    doctorEarning: 180,
    paymentStatus: "Paid",
    date: "2026-06-10",
  },
  {
    id: "TXN1005",
    type: "Refund",
    patient: "Laura Stewart",
    reference: "Dr. Shanta Nesmith",
    referenceId: "AP0902",
    amount: -250,
    commission: 0,
    doctorEarning: 0,
    paymentStatus: "Refunded",
    date: "2026-07-15",
  },
  {
    id: "TXN1006",
    type: "Pharmacy",
    patient: "John Carter",
    reference: "PHO1003",
    referenceId: "PHO1003",
    amount: 23,
    commission: 0,
    doctorEarning: 0,
    paymentStatus: "Unpaid",
    date: "2026-07-21",
  },
]

export const doctorPayoutsData = [
  {
    doctor: "Dr. Michael Brown",
    totalEarned: 405,
    paid: 270,
    pending: 135,
  },
  {
    doctor: "Dr. Edalin Hendry",
    totalEarned: 180,
    paid: 180,
    pending: 0,
  },
  {
    doctor: "Dr. Shanta Nesmith",
    totalEarned: 0,
    paid: 0,
    pending: 0,
  },
]

export const doctorsList = ["All Doctors", "Dr. Michael Brown", "Dr. Edalin Hendry", "Dr. Shanta Nesmith"]
export const types = ["All Types", "Appointment", "Pharmacy", "Refund"]
export const paymentStatuses = ["All Status", "Paid", "Unpaid", "Refunded"]

export const commissionRate = 0.10 // 10%