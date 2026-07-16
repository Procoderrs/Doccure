export const patient = {
  img: "/patient-profile.jpg",
  banner: "/patient-sidebar-bg.jpg",
  name: "Hendrita Hayes",
  patientId: "PT254654",
  gender: "Female",
  age: "32 years 03 Months",
}

export const appointments = [
  { id: "#Apt0001", img: "/doctor-profile-img.jpg", name: "Dr Edalin", date: "11 Nov 2024 10.45 AM", visitType: "General Visit", type: "Video Call", email: "edalin@example.com", phone: "+1 504 368 6874", isNew: false },
  { id: "#Apt0002", img: "/doctor-thumb-13.jpg", name: "Dr.Shanta", date: "05 Nov 2024 11.50 AM", visitType: "General Visit", type: "Audio Call", email: "shanta@example.com", phone: "+1 832 891 8403", isNew: true },
  { id: "#Apt0003", img: "/doctor-thumb-14.jpg", name: "Dr.John", date: "27 Oct 2024 09.30 AM", visitType: "General Visit", type: "Video Call", email: "john@example.com", phone: "+1 749 104 6291", isNew: false },
  { id: "#Apt0004", img: "/doctor-thumb-15.jpg", name: "Dr.Susan", date: "18 Oct 2024 12.20 PM", visitType: "General Visit", type: "Direct Visit", email: "susan@example.com", phone: "+1 584 920 7183", isNew: false },
  { id: "#Apt0005", img: "/doctor-thumb-16.jpg", name: "Dr.Juliet", date: "10 Oct 2024 11.30 AM", visitType: "General Visit", type: "Chat", email: "juliet@example.com", phone: "+1 059 327 6729", isNew: false },
  { id: "#Apt0004", img: "/doctor-thumb-17.jpg", name: "Dr.Susan", date: "18 Oct 2024 12.20 PM", visitType: "General Visit", type: "Direct Visit", email: "susan@example.com", phone: "+1 584 920 7183", isNew: false },
  { id: "#Apt0005", img: "/doctor-thumb-18.jpg", name: "Dr.Juliet", date: "10 Oct 2024 11.30 AM", visitType: "General Visit", type: "Chat", email: "juliet@example.com", phone: "+1 059 327 6729", isNew: false },
]

export const favourites = [
  { img: "/doctor-profile-img.jpg", name: "Dr.Edalin Hendry", degree: "MD - Cardiology", rating: 5.0, reviews: null, nextAvailability: "23 Mar 2024", location: "Newyork, USA", lastBook: "21 Jan 2023", verified: true },
  { img: "/doctor-thumb-13.jpg", name: "Dr.Shanta Nesmith", degree: "DO - Oncology", rating: 4.5, reviews: 35, nextAvailability: "27 Mar 2024", location: "Los Angeles, USA", lastBook: "18 Jan 2023", verified: true },
  { img: "/doctor-thumb-14.jpg", name: "Dr.John Ewel", degree: "MD - Orthopedics", rating: 5.0, reviews: null, nextAvailability: "02 Apr 2024", location: "Dallas, USA", lastBook: "28 Jan 2023", verified: true },
  { img: "/doctor-thumb-15.jpg", name: "Dr.Susan Fenimore", degree: "DO - Dermatology", rating: 4.0, reviews: null, nextAvailability: "05 Apr 2024", location: "Houston, USA", lastBook: "15 Feb 2023", verified: true },
  { img: "/doctor-thumb-16.jpg", name: "Dr.Juliet Rios", degree: "MD - Neurology", rating: 5.0, reviews: null, nextAvailability: "10 Apr 2024", location: "Chicago, USA", lastBook: "20 Feb 2023", verified: true },
  { img: "/doctor-thumb-17.jpg", name: "Dr.Joseph Engels", degree: "MD - Pediatrics", rating: 4.0, reviews: null, nextAvailability: "15 Apr 2024", location: "Phoenix, USA", lastBook: "01 Mar 2023", verified: true },
  { img: "/doctor-thumb-18.jpg", name: "Dr.Juliet Rios", degree: "MD - Neurology", rating: 5.0, reviews: null, nextAvailability: "10 Apr 2024", location: "Chicago, USA", lastBook: "20 Feb 2023", verified: true },
  { img: "/doctor-thumb-19.jpg", name: "Dr.Joseph Engels", degree: "MD - Pediatrics", rating: 4.0, reviews: null, nextAvailability: "15 Apr 2024", location: "Phoenix, USA", lastBook: "01 Mar 2023", verified: true },
  { img: "/doctor-thumb-20.jpg", name: "Dr.Joseph Engels", degree: "MD - Pediatrics", rating: 4.0, reviews: null, nextAvailability: "15 Apr 2024", location: "Phoenix, USA", lastBook: "01 Mar 2023", verified: true },
]

export const dependants = [
  { img: "/dependent-01.jpg", name: "Laura", relation: "Mother", gender: "Female", age: "58 Years 20 Days", bloodGroup: "AB+ve", active: true },
  { img: "/dependent-02.jpg", name: "Mathew", relation: "Father", gender: "Male", age: "59 Years 15 Days", bloodGroup: "AB+ve", active: true },
  { img: "/dependent-03.jpg", name: "Christopher", relation: "Brother", gender: "Male", age: "32 Years 6 Months", bloodGroup: "A+ve", active: true },
  { img: "/dependent-04.jpg", name: "Elisa", relation: "Sister", gender: "Female", age: "28 Years 4 Months", bloodGroup: "B+ve", active: false },
]

export const medicalRecords = [
  { id: "#MR1236", name: "Electro cardiography", date: "24 Mar 2025", recordFor: "Hendrita Clark", recordImg: "/profile-06.jpg", comments: "Take Good Rest" },
  { id: "#MR3656", name: "Complete Blood Count", date: "27 Mar 2025", recordFor: "Laura Stewart", recordImg: "/profile-05.jpg", comments: "Stable, no change" },
  { id: "#MR1246", name: "Blood Glucose Test", date: "10 Apr 2025", recordFor: "Mathew Charles", recordImg: "/profile-04.jpg", comments: "All Clear" },
  { id: "#MR6985", name: "Liver Function Tests", date: "19 Apr 2025", recordFor: "Christopher Joseph", recordImg: "/profile-03.jpg", comments: "Stable, no change" },
  { id: "#MR3659", name: "Blood Cultures", date: "27 Apr 2025", recordFor: "Elisa Salcedo", recordImg: "/profile-02.jpg", comments: "Take Good Rest" },
]

export const wallet = [
  { id: "#AC1234", account: "5396 5250 1908 XXXX", reason: "Appointment", date: "26 Mar 2025", amount: "$300", status: "Completed" },
  { id: "#AC3656", account: "6372 4902 4902 XXXX", reason: "Appointment", date: "28 Mar 2025", amount: "$480", status: "Completed" },
  { id: "#AC1246", account: "4892 0204 0924 XXXX", reason: "Appointment", date: "11 Apr 2025", amount: "$250", status: "Completed" },
  { id: "#AC6985", account: "5730 4892 0492 XXXX", reason: "Refund", date: "18 Apr 2025", amount: "$220", status: "Pending" },
  { id: "#AC3659", account: "7922 9024 5824 XXXX", reason: "Appointment", date: "29 Apr 2025", amount: "$350", status: "Completed" },
]

export const invoices = [
  { id: "#INV1236", img: "/doctor-profile-img.jpg", doctor: "Edalin Hendry", appointmentDate: "24 Mar 2024", bookedOn: "21 Mar 2024", amount: "$300" },
  { id: "#NV3656", img: "/doctor-thumb-13.jpg", doctor: "John Homes", appointmentDate: "17 Mar 2024", bookedOn: "14 Mar 2024", amount: "$450" },
  { id: "#INV1246", img: "/doctor-thumb-14.jpg", doctor: "Shanta Neill", appointmentDate: "11 Mar 2024", bookedOn: "07 Mar 2024", amount: "$250" },
  { id: "#INV6985", img: "/doctor-thumb-15.jpg", doctor: "Anthony Tran", appointmentDate: "26 Feb 2024", bookedOn: "23 Feb 2024", amount: "$320" },
  { id: "#INV3659", img: "/doctor-thumb-16.jpg", doctor: "Susan Lingo", appointmentDate: "18 Feb 2024", bookedOn: "15 Feb 2024", amount: "$480" },
]

export const vitals = {
  bloodPressure: "100 mg/dl",
  heartRate: "140 Bpm",
  glucoseLevel: "70 - 90",
  bodyTemp: "37.5 C",
  bmi: "20.1 kg/m2",
  spo2: "96%",
  lastUpdate: "24Mar 2023",
  records: [
    { id: "#MD1236", name: "Hendrita Kearns", img: "/profile-06.jpg", bmi: 23.5, heartRate: 89, fbcStatus: 140, weight: "74Kg", addedOn: "22 Mar 2024" }
  ]
}