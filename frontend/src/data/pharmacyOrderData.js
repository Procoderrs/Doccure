export const pharmacyOrdersData = [
  {
    id: "PHO1001",
    patient: "Hendrita Hayes",
    items: [
      { name: "Paracetamol 500mg", qty: 2, price: 5 },
      { name: "Vitamin D3 1000IU", qty: 1, price: 8 },
    ],
    totalAmount: 23,
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    prescriptionAttached: false,
    date: "18 Jul 2026",
    address: "1011 W 5th St, Suite 120, Austin, TX 78703",
  },
  {
    id: "PHO1002",
    patient: "Hendrita Hayes",
    items: [
      { name: "Amoxicillin 250mg", qty: 1, price: 12 },
    ],
    totalAmount: 17,
    paymentStatus: "Paid",
    deliveryStatus: "Shipped",
    prescriptionAttached: true,
    prescriptionId: "RX1001",
    date: "20 Jul 2026",
    address: "1011 W 5th St, Suite 120, Austin, TX 78703",
  },
  {
    id: "PHO1003",
    patient: "John Carter",
    items: [
      { name: "Ibuprofen 200mg", qty: 3, price: 6 },
    ],
    totalAmount: 23,
    paymentStatus: "Unpaid",
    deliveryStatus: "Pending",
    prescriptionAttached: false,
    date: "21 Jul 2026",
    address: "220 Oak Street, Dallas, TX 75201",
  },
]

export const deliveryStatuses = ["Pending", "Confirmed", "Packed", "Shipped", "Delivered", "Cancelled"]