export const categories = ["Pain Relief", "Antibiotics", "Vitamins", "Skin Care", "Baby Care", "Diabetes", "Heart Care"]

export const medicinesData = [
  { id: "med-1", name: "Paracetamol 500mg", category: "Pain Relief", brand: "MedicoPharma", price: 5, stock: 240, img: "/medicines/paracetamol.jpg", description: "Fast-acting pain and fever relief tablet.", prescriptionRequired: false, status: "active" },
  { id: "med-2", name: "Amoxicillin 250mg", category: "Antibiotics", brand: "CurePlus", price: 12, stock: 80, img: "/medicines/amoxicillin.jpg", description: "Broad-spectrum antibiotic.", prescriptionRequired: true, status: "active" },
  { id: "med-3", name: "Vitamin D3 1000IU", category: "Vitamins", brand: "VitaCare", price: 8, stock: 150, img: "/medicines/vitamind3.jpg", description: "Daily bone and immunity supplement.", prescriptionRequired: false, status: "active" },
  { id: "med-4", name: "Hydrocortisone Cream", category: "Skin Care", brand: "DermaWell", price: 10, stock: 60, img: "/medicines/hydrocortisone.jpg", description: "Topical cream for skin irritation.", prescriptionRequired: false, status: "active" },
  { id: "med-5", name: "Baby Gripe Water", category: "Baby Care", brand: "TinyTots", price: 6, stock: 100, img: "/medicines/gripewater.jpg", description: "Relieves colic in infants.", prescriptionRequired: false, status: "active" },
  { id: "med-6", name: "Metformin 500mg", category: "Diabetes", brand: "GlucoCare", price: 9, stock: 120, img: "/medicines/metformin.jpg", description: "Controls blood sugar levels.", prescriptionRequired: true, status: "active" },
  { id: "med-7", name: "Atorvastatin 20mg", category: "Heart Care", brand: "CardioMed", price: 14, stock: 90, img: "/medicines/atorvastatin.jpg", description: "Lowers cholesterol.", prescriptionRequired: true, status: "inactive" },
]

export const pharmacyOrdersData = [
  {
    id: "PHO1001", patient: "Hendrita Hayes",
    items: [{ name: "Paracetamol 500mg", qty: 2, price: 5 }, { name: "Vitamin D3 1000IU", qty: 1, price: 8 }],
    totalAmount: 23, paymentStatus: "Paid", deliveryStatus: "Delivered", prescriptionAttached: false, date: "18 Jul 2026",
  },
  {
    id: "PHO1002", patient: "Hendrita Hayes",
    items: [{ name: "Amoxicillin 250mg", qty: 1, price: 12 }],
    totalAmount: 17, paymentStatus: "Paid", deliveryStatus: "Shipped", prescriptionAttached: true, prescriptionId: "RX1001", date: "20 Jul 2026",
  },
  {
    id: "PHO1003", patient: "John Carter",
    items: [{ name: "Ibuprofen 200mg", qty: 3, price: 6 }],
    totalAmount: 23, paymentStatus: "Unpaid", deliveryStatus: "Pending", prescriptionAttached: false, date: "21 Jul 2026",
  },
]

export const deliveryStatuses = ["Pending", "Confirmed", "Packed", "Shipped", "Delivered", "Cancelled"]