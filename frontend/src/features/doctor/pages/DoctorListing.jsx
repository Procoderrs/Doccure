import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMapPinLine, RiTimeLine, RiCalendarLine, RiHeartLine, RiHeartFill, RiSearchLine, RiArrowDownSLine, RiRefreshLine } from "@remixicon/react"
import { doctors as allDoctors } from '../../../data/doctor'
import { useNavigate } from 'react-router-dom'


// ===== Filter Sidebar =====
function FilterSidebar({ filters, setFilters }) {

  const specialities = ["Urology", "Psychiatry", "Cardiology", "Pediatrics", "Urology", "Neurology", "Pulmonology"]
  const genders = ["Male", "Female"]
  const availabilities = ["Available Today", "Available Tomorrow"]
  const experiences = ["2+ Years", "5+ Years"]
  const clinics = ["Bright Smiles Dental Clinic", "Family Care Clinic", "Express Health Clinic"]
  const consultationTypes = ["Audio Call", "Video Call", "Instant Counseling", "Chat"]
  const languages = ["English", "French", "Spanish", "German"]
  const ratings = [5, 4, 3]

  const toggle = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? '' : value
    }))
  }

  const FilterSection = ({ title, children }) => {
    const [open, setOpen] = useState(true)
    return (
      <div className="border-b border-gray-100 pb-4 mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between mb-3 cursor-pointer"
        >
          <h3 className="font-bold text-gray-900 text-base">{title}</h3>
          <RiArrowDownSLine
            size={20}
            className={`text-gray-500 transition-transform duration-200 ${open ? '' : '-rotate-90'}`}
          />
        </button>
        {open && children}
      </div>
    )
  }

  const CheckItem = ({ label, count, filterKey, value }) => (
    <div
      className="flex items-center justify-between py-1.5 cursor-pointer group"
      onClick={() => toggle(filterKey, value || label)}
    >
      <div className="flex items-center gap-2">
        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${filters[filterKey] === (value || label) ? 'bg-[#316dff] border-[#316dff]' : 'border-gray-300'}`}>
          {filters[filterKey] === (value || label) && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className="text-gray-600 text-sm group-hover:text-[#316dff] transition-colors">{label}</span>
      </div>
      {count && <span className="text-gray-400 text-xs">{count}</span>}
    </div>
  )

  return (
    <div className="w-[280px] shrink-0">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-gray-900 text-lg">Filter</h2>
          <button
            onClick={() => setFilters({})}
            className="text-[#316dff] text-sm hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-5">
          <RiSearchLine size={16} className="text-gray-400 shrink-0" />
          <input type="text" placeholder="Search" className="flex-1 text-sm outline-none text-gray-600" />
        </div>

        {/* Specialities */}
        <FilterSection title="Specialities">
          {specialities.map((s, i) => (
            <CheckItem key={i} label={s} count={21} filterKey="specialty" />
          ))}
          <button className="text-[#316dff] text-sm mt-2 hover:underline">View More</button>
        </FilterSection>

        {/* Gender */}
        <FilterSection title="Gender">
          {genders.map((g, i) => (
            <CheckItem key={i} label={g} count={21} filterKey="gender" />
          ))}
        </FilterSection>

        {/* Availability */}
        <FilterSection title="Availability">
          {availabilities.map((a, i) => (
            <CheckItem key={i} label={a} filterKey="availability" />
          ))}
          <button className="text-[#316dff] text-sm mt-2 hover:underline">View More</button>
        </FilterSection>

        {/* Pricing Range */}
        <FilterSection title="Pricing">
          <input
            type="range"
            min={200}
            max={5695}
            className="w-full accent-[#316dff]"
          />
          <p className="text-sm text-gray-500 mt-1">Range : $200 - $5695</p>
        </FilterSection>

        {/* Experience */}
        <FilterSection title="Experience">
          {experiences.map((e, i) => (
            <CheckItem key={i} label={e} filterKey="experience" />
          ))}
          <button className="text-[#316dff] text-sm mt-2 hover:underline">View All</button>
        </FilterSection>

        {/* Clinics */}
        <FilterSection title="Clinics">
          {clinics.map((c, i) => (
            <CheckItem key={i} label={c} filterKey="clinic" />
          ))}
          <button className="text-[#316dff] text-sm mt-2 hover:underline">View More</button>
        </FilterSection>

        {/* Consultation Type */}
        <FilterSection title="Consultation type">
          {consultationTypes.map((c, i) => (
            <CheckItem key={i} label={c} filterKey="consultationType" />
          ))}
        </FilterSection>

        {/* Languages */}
        <FilterSection title="Languages">
          {languages.map((l, i) => (
            <CheckItem key={i} label={l} filterKey="language" />
          ))}
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Languages">
          {ratings.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-2 py-1.5 cursor-pointer"
              onClick={() => toggle('rating', r)}
            >
              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${filters.rating === r ? 'bg-[#316dff] border-[#316dff]' : 'border-gray-300'}`}>
                {filters.rating === r && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="flex gap-0.5">
                {[...Array(r)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
                {[...Array(5 - r)].map((_, j) => (
                  <span key={j} className="text-gray-300 text-sm">★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">{r} Star</span>
            </div>
          ))}
        </FilterSection>

      </div>
    </div>
  )
}

// ===== Doctor Card =====
function DoctorCard({ doc }) {
  const [liked, setLiked] = useState(false)
const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">

      {/* Image */}
      <div className="relative bg-gray-100">
        <img src={doc.img} alt={doc.name} className="w-full h-52 object-cover object-top" />

        <div className="absolute top-3 left-3 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          <span>★</span>
          <span>{doc.rating.toFixed(1)}</span>
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          {liked
            ? <RiHeartFill size={16} className="text-red-500" />
            : <RiHeartLine size={16} className="text-gray-400" />
          }
        </button>
      </div>

      {/* Body */}
      <div className="p-4">

        {/* Specialty + Available */}
        <div
          className="flex items-center justify-between mb-2"
          style={{ borderLeft: `3px solid ${doc.borderColor}`, paddingLeft: "8px" }}
        >
          <span className="text-sm font-semibold" style={{ color: doc.specialtyColor }}>
            {doc.specialty}
          </span>
          <span className={`flex items-center gap-1 text-xs font-medium ${doc.available ? 'text-green-500' : 'text-red-500'}`}>
            <span className={`w-2 h-2 rounded-full inline-block ${doc.available ? 'bg-green-500' : 'bg-red-500'}`} />
            {doc.available ? 'Available' : 'Unavailable'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.name}</h3>

        <div className="flex items-center gap-3 text-gray-500 text-sm mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <RiMapPinLine size={14} />
            {doc.location}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1">
            <RiTimeLine size={14} />
            {doc.time}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-gray-400 text-xs">Consultation Fees</p>
            <p className="text-orange-500 font-bold text-xl">${doc.fee}</p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-semibold"
           style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <RiCalendarLine size={16} />
            <button onClick={() => navigate('/booking')}>
  Book Now
</button>
          </button>
        </div>

      </div>
    </div>
  )
}

// ===== Main Doctors Page =====
export default function DoctorsPage() {
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState('Price (Low to High)')
  const [visibleCount, setVisibleCount] = useState(6)

  // Filter logic
  const filtered = allDoctors.filter(doc => {
    if (filters.specialty && doc.specialty !== filters.specialty) return false
    if (filters.gender && doc.gender !== filters.gender) return false
    if (filters.availability && doc.availability !== filters.availability) return false
    if (filters.experience && doc.experience !== filters.experience) return false
    if (filters.clinic && doc.clinic !== filters.clinic) return false
    if (filters.consultationType && doc.consultationType !== filters.consultationType) return false
    if (filters.language && doc.language !== filters.language) return false
    if (filters.rating && doc.rating < filters.rating) return false
    return true
  })

  // Sort logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Price (Low to High)') return a.fee - b.fee
    if (sortBy === 'Price (High to Low)') return b.fee - a.fee
    if (sortBy === 'Rating') return b.rating - a.rating
    return 0
  })

  const visible = sorted.slice(0, visibleCount)


  return (
    <div className="min-h-screen bg-gray-50 font-user">

      {/* Page Header */}
      <div
        className="relative py-12 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #e6f1fb 0%, #f8faff 100%)" }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
          <Link to="/" className="text-[#316dff]">🏠</Link>
          <span>›</span>
          <span>Doctor</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Doctor Grid</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Doctor Grid</h1>

        {/* Search bar */}
        <div className="max-w-3xl mx-auto mt-6 px-4">
          <div className="bg-white border-2 border-[#316dff]/30 rounded-full px-6 py-3 flex items-center gap-4 shadow-sm">
            <RiSearchLine size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search for Doctors, Hospitals..."
              className="flex-1 text-sm text-gray-600 outline-none"
            />
            <div className="w-px h-5 bg-gray-200" />
            <RiMapPinLine size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Location"
              className="w-28 text-sm text-gray-600 outline-none"
            />
            <div className="w-px h-5 bg-gray-200" />
            <input
              type="date"
              className="text-sm text-gray-400 outline-none"
            />
            <button
              className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shrink-0"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-18 py-10 flex gap-6 items-start">

        {/* Sidebar */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Right side */}
        <div className="flex-1 min-w-0">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-xl font-bold text-gray-900">
              Showing <span style={{ color: "#316dff" }}>{filtered.length}</span> Doctors For You
            </h2>

            <div className="flex items-center gap-3">
              {/* Availability pill */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-white">
                <span>Availability</span>
                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">×</span>
                <RiArrowDownSLine size={16} />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white"
                >
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Doctor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} />
            ))}
          </div>

          {/* Load More */}
          {visibleCount < sorted.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
              >
                <RiRefreshLine size={18} />
                Load More {sorted.length - visibleCount} Doctors
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}