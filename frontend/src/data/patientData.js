export const patientsData = [
  {
    id: "pat-1",
    name: "Hendrita Hayes",
    email: "hendrita.hayes@example.com",
    phone: "+1 504 368 6874",
    age: 32,
    gender: "Female",
    city: "New York",
    totalAppointments: 8,
    lastVisitedDoctor: "Dr. Michael Brown",
    lastAppointmentDate: "21 Jul 2026",
    status: "active", // active | blocked
    img: "/patient-20.jpg",
    appointmentsHistory: [
      { id: "AP1001", doctor: "Dr. Michael Brown", date: "21 Jul 2026", type: "Clinic", status: "Confirmed" },
      { id: "AP0987", doctor: "Dr. Edalin Hendry", date: "10 Jun 2026", type: "Video Call", status: "Completed" },
      { id: "AP0872", doctor: "Dr. Michael Brown", date: "02 May 2026", type: "Clinic", status: "Completed" },
    ],
    doctorsVisited: [
      { name: "Dr. Michael Brown", specialty: "Psychologist", visits: 5 },
      { name: "Dr. Edalin Hendry", specialty: "Cardiologist", visits: 3 },
    ],
    prescriptions: [
      { id: "RX1001", doctor: "Dr. Michael Brown", date: "21 Jul 2026", file: "prescription_21jul.pdf" },
      { id: "RX0987", doctor: "Dr. Edalin Hendry", date: "10 Jun 2026", file: "prescription_10jun.pdf" },
    ],
    invoices: [
      { id: "INV1001", doctor: "Dr. Michael Brown", date: "21 Jul 2026", amount: 300, status: "Paid" },
      { id: "INV0987", doctor: "Dr. Edalin Hendry", date: "10 Jun 2026", amount: 200, status: "Paid" },
    ],
    reviewsGiven: [
      { doctor: "Dr. Michael Brown", rating: 5, comment: "Very attentive and professional.", date: "21 Jul 2026" },
      { doctor: "Dr. Edalin Hendry", rating: 4, comment: "Good experience overall.", date: "10 Jun 2026" },
    ],
  },
  {
    id: "pat-2",
    name: "John Carter",
    email: "john.carter@example.com",
    phone: "+1 749 104 6291",
    age: 45,
    gender: "Male",
    city: "Austin",
    totalAppointments: 3,
    lastVisitedDoctor: "Dr. Michael Brown",
    lastAppointmentDate: "22 Jul 2026",
    status: "active",
    img: "/patient-21.jpg",
    appointmentsHistory: [
      { id: "AP1002", doctor: "Dr. Michael Brown", date: "22 Jul 2026", type: "Audio Call", status: "Pending" },
      { id: "AP0765", doctor: "Dr. Michael Brown", date: "01 Jun 2026", type: "Clinic", status: "Completed" },
    ],
    doctorsVisited: [
      { name: "Dr. Michael Brown", specialty: "Psychologist", visits: 3 },
    ],
    prescriptions: [
      { id: "RX0765", doctor: "Dr. Michael Brown", date: "01 Jun 2026", file: "prescription_01jun.pdf" },
    ],
    invoices: [
      { id: "INV0765", doctor: "Dr. Michael Brown", date: "01 Jun 2026", amount: 150, status: "Paid" },
    ],
    reviewsGiven: [],
  },
  {
    id: "pat-3",
    name: "Laura Stewart",
    email: "laura.stewart@example.com",
    phone: "+1 832 891 8403",
    age: 58,
    gender: "Female",
    city: "Los Angeles",
    totalAppointments: 12,
    lastVisitedDoctor: "Dr. Shanta Nesmith",
    lastAppointmentDate: "15 Jul 2026",
    status: "blocked",
    img: "/patient22.webp",
    appointmentsHistory: [
      { id: "AP0902", doctor: "Dr. Shanta Nesmith", date: "15 Jul 2026", type: "Clinic", status: "Completed" },
    ],
    doctorsVisited: [
      { name: "Dr. Shanta Nesmith", specialty: "Oncologist", visits: 12 },
    ],
    prescriptions: [
      { id: "RX0902", doctor: "Dr. Shanta Nesmith", date: "15 Jul 2026", file: "prescription_15jul.pdf" },
    ],
    invoices: [
      { id: "INV0902", doctor: "Dr. Shanta Nesmith", date: "15 Jul 2026", amount: 250, status: "Pending" },
    ],
    reviewsGiven: [
      { doctor: "Dr. Shanta Nesmith", rating: 3, comment: "Long waiting time.", date: "15 Jul 2026" },
    ],
  },
]

export const cities = ["All Cities", "New York", "Austin", "Los Angeles"]
export const statuses = ["All Status", "active", "blocked"]