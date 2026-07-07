export default function MarqueeStrip() {
  const items = [
    "Medicines & Supplies",
    "Hospitals & Clinics",
    "Health Care Services",
    "Talk to Doctors",
    "Home Care",
    "Book Appointment",
    "Lab Testing",
  ]

  const allItems = [...items, ...items]

  return (
    <section className="w-full overflow-hidden py-5"
      style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
    >
      {/* Right to left — normal marquee */}
      <div className="marquee-ltr flex gap-12 w-max">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="text-white font-semibold text-lg whitespace-nowrap">
              {item}
            </span>
            {/* Divider line */}
            <span className="w-10 h-[2px] bg-white/50 inline-block" />
          </div>
        ))}
      </div>
    </section>
  )
}