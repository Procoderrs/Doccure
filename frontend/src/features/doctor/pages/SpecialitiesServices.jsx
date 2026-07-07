import React, { useState } from 'react'
import { RiAddLine, RiArrowUpSLine, RiArrowDownSLine } from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb'

const specialityOptions = ["Cardiology", "Neurology", "Urology", "Dentistry", "Orthopedics", "Pediatrics", "Psychiatry", "Dermatology"]
const serviceOptions = ["Select Service", "Surgery", "General Checkup", "Dental Cleaning", "Root Canal", "Consultation", "Lab Test"]

const initialData = [
  {
    id: 1,
    name: "Cardiology",
    open: true,
    speciality: "",
    services: [{ id: 1, service: "", price: "454", about: "" }],
  },
  {
    id: 2,
    name: "Neurology",
    open: true,
    speciality: "Cardiology",
    services: [{ id: 1, service: "Surgery", price: "454", about: "" }],
  },
  {
    id: 3,
    name: "Urology",
    open: true,
    speciality: "Neurology",
    services: [{ id: 1, service: "General Checkup", price: "454", about: "" }],
  },
]

export default function SpecialitiesServices() {
  const [cards, setCards] = useState(initialData)

  // ===== Toggle accordion =====
  const toggleCard = (id) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, open: !c.open } : c))
  }

  // ===== Delete card =====
  const deleteCard = (id) => {
    setCards(prev => prev.filter(c => c.id !== id))
  }

  // ===== Update speciality dropdown =====
  const updateSpeciality = (id, value) => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, speciality: value } : c))
  }

  // ===== Add new service row inside a card =====
  const addService = (cardId) => {
    setCards(prev => prev.map(c =>
      c.id === cardId
        ? { ...c, services: [...c.services, { id: Date.now(), service: "", price: "", about: "" }] }
        : c
    ))
  }

  // ===== Delete service row =====
  const deleteService = (cardId, serviceId) => {
    setCards(prev => prev.map(c =>
      c.id === cardId
        ? { ...c, services: c.services.filter(s => s.id !== serviceId) }
        : c
    ))
  }

  // ===== Update service row field =====
  const updateService = (cardId, serviceId, field, value) => {
    setCards(prev => prev.map(c =>
      c.id === cardId
        ? {
            ...c,
            services: c.services.map(s =>
              s.id === serviceId ? { ...s, [field]: value } : s
            )
          }
        : c
    ))
  }

  // ===== Add new speciality card =====
  const addNewSpeciality = () => {
    setCards(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "New Speciality",
        open: true,
        speciality: "",
        services: [{ id: Date.now(), service: "", price: "", about: "" }],
      }
    ])
  }

  return (
    <div className="font-user">

      {/* Breadcrumb */}
      <div className="p-6">
        <Breadcrumb title="Specialities & Services" parent="Doctor" />
      </div>

      <div className="px-6 pb-10">

        {/* ===== Page heading + Add New Speciality button ===== */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Speciality & Services</h2>
          <button
            onClick={addNewSpeciality}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <RiAddLine size={16} />
            Add New Speciality
          </button>
        </div>

        {/* ===== Speciality Cards ===== */}
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >

              {/* ===== Card Header ===== */}
              <div className="flex items-center justify-between px-6 py-4">
                <h3 className="font-bold text-gray-900 text-base">{card.name}</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => deleteCard(card.id)}
                    className="text-red-500 text-sm font-medium hover:underline"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {card.open
                      ? <RiArrowUpSLine size={20} />
                      : <RiArrowDownSLine size={20} />
                    }
                  </button>
                </div>
              </div>

              {/* ===== Card Body — collapsible ===== */}
              {card.open && (
                <div className="px-6 pb-5 border-t border-gray-100">

                  {/* Speciality dropdown */}
                  <div className="mt-4 mb-5">
                    <label className="text-sm text-gray-600 mb-1.5 block">
                      Speciality <span className="text-red-500">*</span>
                    </label>
                    <div className="relative w-64">
                      <select
                        value={card.speciality}
                        onChange={(e) => updateSpeciality(card.id, e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] transition-colors text-gray-700 appearance-none pr-8"
                      >
                        <option value="">Select Speciality</option>
                        {specialityOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                    </div>
                  </div>

                  {/* Service rows header */}
                  <div className="grid grid-cols-[1fr_120px_1fr_80px] gap-4 mb-2">
                    <p className="text-sm text-gray-600 font-medium">
                      Service <span className="text-red-500">*</span>
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      Price ($) <span className="text-red-500">*</span>
                    </p>
                    <p className="text-sm text-gray-600 font-medium">About Service</p>
                    <div />
                  </div>

                  {/* Service rows */}
                  <div className="flex flex-col gap-3">
                    {card.services.map((svc) => (
                      <div key={svc.id} className="grid grid-cols-[1fr_120px_1fr_80px] gap-4 items-center">

                        {/* Service dropdown */}
                        <div className="relative">
                          <select
                            value={svc.service}
                            onChange={(e) => updateService(card.id, svc.id, 'service', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] transition-colors text-gray-700 appearance-none pr-8"
                          >
                            {serviceOptions.map((opt, i) => (
                              <option key={i} value={opt === "Select Service" ? "" : opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                        </div>

                        {/* Price input */}
                        <input
                          type="text"
                          placeholder="454"
                          value={svc.price}
                          onChange={(e) => updateService(card.id, svc.id, 'price', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] transition-colors"
                        />

                        {/* About Service input */}
                        <input
                          type="text"
                          value={svc.about}
                          onChange={(e) => updateService(card.id, svc.id, 'about', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] transition-colors"
                        />

                        {/* Delete service */}
                        <button
                          onClick={() => deleteService(card.id, svc.id)}
                          className="text-red-500 text-sm font-medium hover:underline text-right"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add New Service */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => addService(card.id)}
                      className="flex items-center gap-1 text-[#316dff] text-sm font-medium hover:underline"
                    >
                      <RiAddLine size={15} />
                      Add New Service
                    </button>
                  </div>

                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}