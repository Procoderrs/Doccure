import React, { useState } from "react";
import {
	RiCalendarLine,
	RiMapPinLine,
	RiMessage2Line,
	RiArrowRightLine,
	RiAddLine,
	RiCalendar2Fill,
	RiNotification3Fill,
	RiStarFill,
	RiCalendarCheckFill,
	RiMoneyRupeeCircleLine,
} from "@remixicon/react";

const healthRecords = {
	heartRate: { value: "140 Bpm", change: "2%" },
	bodyTemp: { value: "37.5 C" },
	glucoseLevel: { value: "70 - 90", change: "6%" },
	spo2: { value: "96%" },
	bloodPressure: { value: "100 mg/dl", change: "2%" },
	bmi: { value: "20.1 kg/m2" },
};

const notifications = [
	{
		icon: RiNotification3Fill,
		text: "Booking Confirmed on",
		bold: "21 Mar 2024 10:30 AM",
		time: "Just Now",
		color: "#6938ef",
	},
	{
		icon: RiStarFill,
		text: "You have a",
		bold: "New Review",
		extra: "for your Appointment",
		time: "5 Days ago",
		color: "#316dff",
	},
	{
		icon: RiCalendarCheckFill,
		text: "You have Appointment with Ahmed by",
		bold: "01:20 PM",
		time: "12:55 PM",
		color: "#ffca18",
		isLink: true,
	},
	{
		icon: RiMoneyRupeeCircleLine,
		text: "Sent an amount of",
		bold: "$200",
		extra: "for an Appointment",
		time: "2 Days ago",
		color: "#316dff",
	},
	{
		icon: RiStarFill,
		text: "You have a",
		bold: "New Review",
		extra: "for your Appointment",
		time: "5 Days ago",
		color: "#316dff",
	},
];

const upcomingAppointments = [
	{
		img: "/doctor-profile-img.jpg",
		name: "Dr.Edalin Hendry",
		specialty: "Dentist",
		date: "21 Mar 2024 - 10:30 PM",
		type: "video",
	},
	{
		img: "/doctor-17.jpg",
		name: "Dr.Juliet Gabriel",
		specialty: "Cardiologist",
		date: "22 Mar 2024 - 10:30 PM",
		type: "chat",
	},
];

const pastAppointment = {
	img: "/doctor-profile-img.jpg",
	name: "Dr.Edalin Hendry",
	specialty: "Dental Specialist",
	date: "Thursday, Mar 2024",
	time: "04:00 PM - 04:30 PM (30 Min)",
	location: "Newyork, United States",
};

const dependants = [
	{
		img: "/patient-20.jpg",
		name: "Laura",
		relation: "Mother",
		age: "58 years 20 days",
	},
	{
		img: "/patient-21.jpg",
		name: "Mathew",
		relation: "Father",
		age: "59 years 15 days",
	},
];

const reportAppointments = [
  {
    id: "#AP1236",
    img: "/doctor-thumb-24.jpg",
    doctor: "Dr. Robert Womack",
    date: "21 Mar 2024, 10:30 AM",
    type: "Video call",
    status: "Upcoming",
    statusColor: "#6938ef",
    statusBg: "#f0ebff",
  },
  {
    id: "#AP3656",
    img: "/doctor-thumb-23.jpg",
    doctor: "Dr. Patricia Cassidy",
    date: "28 Mar 2024, 11:40 AM",
    type: "Clinic Visit",
    status: "Completed",
    statusColor: "#6938ef",
    statusBg: "#f0ebff",
  },
  {
    id: "#AP1246",
    img: "/doctor-thumb-22.jpg",
    doctor: "Dr. Kevin Evans",
    date: "02 Apr 2024, 09:20 AM",
    type: "Audio Call",
    status: "Completed",
    statusColor: "#22c55e",
    statusBg: "#dcfce7",
  },
  {
    id: "#AP6985",
    img: "/doctor-thumb-25.jpg",
    doctor: "Dr. Lisa Keating",
    date: "15 Apr 2024, 04:10 PM",
    type: "Clinic Visit",
    status: "Cancelled",
    statusColor: "#ef4444",
    statusBg: "#fee2e2",
  },
  {
    id: "#AP3659",
    img: "/doctor-thumb-26.jpg",
    doctor: "Dr. John Hammer",
    date: "10 May 2024, 06:00 PM",
    type: "Video Call",
    status: "Upcoming",
    statusColor: "#316dff",
    statusBg: "#e6f1fb",
  },
]

const chartData = [140, 100, 175, 130, 105, 130];
const chartDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const favourites = [
	{
		img: "/doctor-profile-img.jpg",
		name: "Dr. Edalin",
		specialty: "Endodontists",
	},
	{
		img: "/doctor-thumb-11.jpg",
		name: "Dr. Maloney",
		specialty: "Cardiologist",
	},
	{ img: "/doctor-14.jpg", name: "Dr. Wayne", specialty: "Dental Specialist" },
	{ img: "/doctor-15.jpg", name: "Dr. Marla", specialty: "Endodontists" },
];

const weekDays = [
	{ date: 19, day: "Mon" },
	{ date: 20, day: "Mon" },
	{ date: 21, day: "Tue", dot: true },
	{ date: 22, day: "Wed", dot: true },
	{ date: 23, day: "Thu" },
];

export default function Overview() {
	const [reportTab, setReportTab] = useState("Appointments");
	const [chartTab, setChartTab] = useState("Heart Rate");
	const [selectedDay, setSelectedDay] = useState(21);

	return (
		<>
			<div className="p-6 bg-gray-50 min-h-screen font-user" >
				{/* Top bar */}
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
					<div className="flex items-center gap-2 text-sm text-gray-500">
						<img
							src="/profile-06.jpg"
							alt=""
							className="w-12 h-12 rounded-full object-cover"
						/>
						Hendrita ▾
					</div>
				</div>

				<div className="gap-5">
					<div className="grid grid-cols-[60%_30%] py-3 gap-4">
						{/* Health Records */}
						<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm">
							<h3 className="font-bold text-xl text-gray-900 px-5 py-4 border-b border-gray-200 ">
								Health Records
							</h3>
							<div className="grid grid-cols-[60%_30%] gap-4 pt-4">
								<div className="grid grid-cols-2  mb-4 px-8">
									{Object.entries(healthRecords).map(([key, val]) => (
										<div key={key} className=" rounded-xl ">
											<p className="text-gray-800 text-xs capitalize mb-1">
												{key === "heartRate"
													? "❤️ Heart Rate"
													: key === "bodyTemp"
														? "🌡️ Body Temperature"
														: key === "glucoseLevel"
															? "💧 Glucose Level"
															: key === "spo2"
																? "🫁 SPo2"
																: key === "bloodPressure"
																	? "💊 Blood Pressure"
																	: "⚖️ BMI"}
											</p>
											<p className="font-bold text-gray-900">
												<span className="text-2xl"> {val.value}</span>
												{val.change && (
													<sup className="text-green-500 text-xs ml-1">
														{val.change}
													</sup>
												)}
											</p>
										</div>
									))}
								</div>
								{/* Overall Report donut */}
								<div className="bg-white px-5 border-l border-gray-100 ">
									<h3 className="font-bold text-gray-900 mb-4">
										Overall Report
									</h3>
									<div className="flex items-center justify-center mb-4">
										<div className="relative w-32 h-32">
											<svg
												viewBox="0 0 36 36"
												className="w-full h-full -rotate-90"
											>
												<circle
													cx="18"
													cy="18"
													r="15.9"
													fill="none"
													stroke="#f3f4f6"
													strokeWidth="3"
												/>
												<circle
													cx="18"
													cy="18"
													r="15.9"
													fill="none"
													stroke="#22c55e"
													strokeWidth="3"
													strokeDasharray="95 5"
													strokeLinecap="round"
												/>
											</svg>
											<div className="absolute inset-0 flex flex-col items-center justify-center">
												<p className="text-xs text-gray-400">Last visit 25</p>
												<p className="text-xs text-gray-400">Mar 2024</p>
											</div>
										</div>
									</div>
									<p className="text-center text-gray-500 font-semibold text-sm">
										Your health is 95% Normal
									</p>
									<button
										className="w-full mt-4 py-2.5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2"
										style={{ background: "#0f172a" }}
									>
										View Details <RiArrowRightLine size={16} />
									</button>
								</div>
							</div>
							<p className="text-gray-700 text-xs px-4 pb-6">
								Report generated on last visit : 25 Mar 2024 📋
							</p>
						</div>
						<div className="flex flex-col gap-y-5">
							{/* Book Appointment */}
							<div className=" relative rounded-2xl p-3 flex items-center justify-between bg-[#3538cd] cursor-pointer">
								<div>
									<p className="text-white text-sm">Book a new</p>
									<p className="text-white font-bold text-lg">Appointment</p>
								</div>
								<div className="w-4 h-4 rounded-full bg-white  flex items-center justify-center">
									<RiAddLine size={15} className="text-[#3538cd]" />
								</div>
								<img className="absolute" src="/card-bg-small.png" alt="" />
							</div>
							{/* Favourites */}
							<div className="bg-white rounded-2xl  border border-gray-100 ">
								<div className="  border-b  border-gray-200 ">
									<div className="flex items-center justify-between py-3 px-4">
										<h3 className="font-bold text-xl text-gray-900">
											Favourites
										</h3>
										<button className="text-[#316dff] text-sm underline">
											View All
										</button>
									</div>
								</div>
								<div className="flex flex-col gap-3 p-5">
									{favourites.map((f, i) => (
										<div key={i} className="flex items-center gap-3">
											<img
												src={f.img}
												alt=""
												className="w-12 h-12 rounded-xl object-cover bg-gray-100"
											/>
											<div className="flex-1">
												<p className="font-semibold text-gray-800 text-sm">
													{f.name}
												</p>
												<p className="text-gray-600 text-xs">{f.specialty}</p>
											</div>
											<button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-200">
												<RiCalendar2Fill size={15} />
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-[40%_50%] gap-4">
						{/* Appointment calendar */}
						<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm">
							<div className="border-b mb-3 border-gray-200 ">
                <div className="flex items-center justify-between px-3  py-3">
								<h3 className="     font-bold text-xl text-gray-900">Appointment</h3>
								<div className="flex gap-2">
									<button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
										‹
									</button>
									<button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
										›
									</button>
								</div>
							</div>
              </div>

							{/* Week selector */}
							<div className="flex gap-3 mb-3 px-3">
								{weekDays.map((d, i) => (
									<div
										key={i}
										onClick={() => setSelectedDay(d.date)}
										className="flex flex-col items-center gap-1 border border-gray-300 p-2 rounded-lg cursor-pointer"
									>
										<span className=" font-bold text-gray-900">{d.date}</span>
										<span className=" text-gray-400">{d.day}</span>
										{d.dot && (
											<span
												className="w-1.5 h-1.5 rounded-full"
												style={{
													background:
														selectedDay === d.date ? "#316dff" : "#e2e8f0",
												}}
											/>
										)}
									</div>
								))}
							</div>

							{/* Appointment cards */}
							<div className="flex flex-col gap-3 px-3">
								{upcomingAppointments.map((apt, i) => (
									<div
										key={i}
										className="border border-gray-100 rounded-xl p-4 flex gap-3"
									>
										{/* Avatar */}
										<img
											src={apt.img}
											alt=""
											className="w-15 h-15 rounded-xl object-cover bg-gray-100 shrink-0"
										/>

										{/* Content */}
										<div className="flex-1">
											{/* Name + Icon */}
											<div className="flex items-start justify-between">
												<div>
													<p className="font-medium text-gray-900 text-lg">
														{apt.name}
													</p>
													<p className="text-gray-900 text-sm">
														{apt.specialty}
													</p>
												</div>

												<RiCalendar2Fill className="text-black" size={18} />
											</div>

											{/* Date */}
											<p className="text-gray-900  mt-3 flex  gap-1">
												🕐 {apt.date}
											</p>

											{/* Buttons */}
											<div className="flex gap-2 mt-4 ">
												<button className="px-6 py-2 rounded-full border border-gray-200 text-xs text-gray-600 hover:bg-gray-50">
													💬 Chat
												</button>

												<button
													className="px-6 py-2 rounded-full text-white text-xs font-semibold"
													style={{
														background:
															"linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)",
													}}
												>
													🎥 Attend
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Analytics chart */}
						<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm">
							<div className="flex border-b border-gray-200 py-3 px-3 items-center justify-between mb-3">
								<h3 className="font-bold text-xl text-gray-900">Analytics</h3>
								<div className="flex items-center gap-2 text-xs text-gray-800 border border-gray-200 rounded-lg px-2 py-1">
									Mar 14 - Mar 21 ▾
								</div>
							</div>
							<div className="flex gap-4 mb-4 px-3">
								{["Heart Rate", "Blood Pressure"].map((tab) => (
									<button
										key={tab}
										onClick={() => setChartTab(tab)}
										className="text- font-medium pb-1 transition-colors"
										style={{
											color: chartTab === tab ? "#316dff" : "#000",
											borderBottom:
												chartTab === tab
													? "2px solid #316dff"
													: "2px solid transparent",
										}}
									>
										{tab}
									</button>
								))}
							</div>
							<div className="flex items-end gap-2 h-32">
								{chartData.map((val, i) => (
									<div
										key={i}
										className="flex-1 flex flex-col items-center gap-1"
									>
										<div
											className="w-full rounded-t-sm"
											style={{
												height: `${(val / 200) * 100}%`,
												background: "#316dff",
												opacity: 0.8,
											}}
										/>
										<span className="text-xs text-gray-800">
											{chartDays[i]}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-[40%_50%] gap-5  py-3">
						{/* Notifications */}
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm ">
							<div className="flex items-center justify-between border-b border-gray-200 mb-4 p-3">
								<h3 className="font-bold text-gray-900 text-lg">
									Notifications
								</h3>
								<button className="text-[#316dff] text-sm hover:underline">
									View All
								</button>
							</div>
							<div className="flex flex-col gap-4 px-3">
								{notifications.map((n, i) => {
									const Icon = n.icon; // <-- yahan component ko variable mein nikalo
									return (
										<div key={i} className="flex items-start gap-3">
											<div
												className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm"
												style={{ background: `${n.color}20` }}
											>
												<Icon size={18} color={n.color} />
											</div>
											<div className="flex-1">
												<p className="text-gray-600 text-sm">
													{n.text}{" "}
													<span
														className={`font-bold ${n.isLink ? "text-[#316dff]" : "text-gray-900"}`}
													>
														{n.bold}
													</span>
													{n.extra && ` ${n.extra}`}
												</p>
												<p className="text-gray-400 text-xs mt-1">{n.time}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						{/* Past Appointments */}
						<div className=" ">
							<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm pb-2 mb-4">
								<div className="flex items-center border-b border-gray-200 p-3 justify-between mb-4">
									<h3 className="font-bold text-gray-900">Past Appointments</h3>
									<div className="flex gap-2">
										<button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
											‹
										</button>
										<button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
											›
										</button>
									</div>
								</div>
								<div className="px-3">
                  <div className="flex items-center gap-3 mb-3 ">
									<img
										src={pastAppointment.img}
										alt=""
										className="w-12 h-12 rounded-full object-cover bg-gray-100"
									/>
									<div className="flex-1">
										<p className="font-bold text-gray-900 text-sm">
											{pastAppointment.name}
										</p>
										<p className="text-gray-600 text-xs">
											{pastAppointment.specialty}
										</p>
									</div>
									<span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-xl font-semibold flex items-center gap-1">
										📹 30 Min
									</span>
								</div>
								<p className="font-bold text-gray-900 text-sm mb-2">
									{pastAppointment.date}
								</p>
								<p className="text-gray-800 text-xs flex items-center gap-1 mb-1">
									🕐 {pastAppointment.time}
								</p>
								<p className="text-gray-800 text-xs flex items-center gap-1 mb-4">
									📍 {pastAppointment.location}
								</p>
								<div className="flex gap-3">
									<button className="flex-1 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
										Reschedule
									</button>
									<button
										className="flex-1 py-2 rounded-full text-white text-sm font-semibold"
										style={{
											background:
												"linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)",
										}}
									>
										View Details
									</button>
								</div>
                </div>
							</div>
							{/* Dependant */}
							<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm">
								<div className="flex items-center border-b border-gray-200 p-3 justify-between mb-4">
									<h3 className="font-bold text-gray-900">Dependant</h3>
									<div className="flex items-center gap-3 ">
										<button className="text-[#316dff] text-sm flex items-center gap-1 hover:underline">
											<RiAddLine size={14} /> Add New
										</button>
										<button className="text-[#316dff] text-sm hover:underline">
											View All
										</button>
									</div>
								</div>
								<div className="flex flex-col gap-3 px-3 py-3">
									{dependants.map((d, i) => (
										<div key={i} className="flex items-center gap-3">
											<img
												src={d.img}
												alt=""
												className="w-12 h-12 rounded-xl object-cover bg-gray-100"
											/>
											<div className="flex-1">
												<p className="font-semibold text-gray-800 text-sm">
													{d.name}
												</p>
												<p className="text-gray-400 text-xs">
													{d.relation} - {d.age}
												</p>
											</div>
											<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
												📅
											</button>
											<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
												👁️
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Reports */}
					<div className="bg-white rounded-2xl  border border-gray-100 shadow-sm">
						<h3 className="font-bold text-gray-900 mb-4 text-xl p-3 border-b border-gray-200">Reports</h3>
						<div className="flex gap-2 mb-5 flex-wrap px-3">
							{[
								"Appointments",
								"Medical Records",
								"Prescriptions",
								"Invoices",
							].map((tab) => (
								<button
									key={tab}
									onClick={() => setReportTab(tab)}
									className="px-4 py-2 rounded-full text-sm font-medium transition-all"
									style={{
										background:
											reportTab === tab
												? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)"
												: "#f3f4f6",
										color: reportTab === tab ? "white" : "#374151",
									}}
								>
									{tab}
								</button>
							))}
						</div>

						<table className="w-full ">
							<thead>
								<tr>
									{["ID", "Doctor", "Date", "Type", "Status"].map((h) => (
										<th
											key={h}
											className="text-left text-sm font-medium py-3 px-3 bg-gray-50 first:rounded-l-lg last:rounded-r-lg text-gray-500 "
										>
											{h}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{reportAppointments.map((r, i) => (
									<tr
										key={i}
										className="border-t border-gray-50 hover:bg-gray-50 transition"
									>
										<td className="py-3 px-3 text-[#316dff] text-sm font-medium">
											{r.id}
										</td>
										<td className="py-3 px-3">
											<div className="flex items-center gap-2">
												<img
													src={r.img}
													alt=""
													className="w-8 h-8 rounded-xl object-cover bg-gray-100"
												/>
												<span className="text-gray-800 text-sm font-medium">
													{r.doctor}
												</span>
											</div>
										</td>
										<td className="py-3 px-3 text-gray-500 text-sm">
											{r.date}
										</td>
										<td className="py-3 px-3 text-gray-500 text-sm">
											{r.type}
										</td>
										<td className="py-3 px-3">
                   <span
                 className="flex items-center gap-1 text-xs  px-3 py-1 rounded-full w-fit"
                 style={{
                   color: r.statusColor,
                   background: r.statusBg,
                 }}
               >
                   <span
                     className="w-1.5 h-1.5 rounded-full shrink-0"
                     style={{ background: r.statusColor }}
                   />
                   {r.status}
                 </span>
               </td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					
				</div>
			</div>
		</>
	);
}
