import React, { useState } from 'react'
import { RiSearchLine, RiMoreLine, RiSendPlaneFill, RiEmotionLine, RiMicLine, RiAddCircleLine, RiPlayCircleLine, RiMapPinLine, RiDownloadLine, RiVideoLine, RiFileTextLine, RiPhoneLine } from "@remixicon/react"

// ===== Dummy Data =====
const onlineUsers = [
  { id: 1, img: "/profile-01.jpg" },
  { id: 2, img: "/profile-02.jpg" },
  { id: 3, img: "/profile-03.jpg" },
  { id: 4, img: "/profile-04.jpg" },
  { id: 5, img: "/profile-05.jpg" },
]

const pinnedChats = [
  { id: 1, name: "Adrian Marshall", img: "/profile-01.jpg", time: "Just Now", msg: "Have you called them?", pinned: true, read: true },
  { id: 2, name: "Dr Joseph Boyd", img: "/profile-02.jpg", time: "Yesterday", msg: "Video", pinned: true, type: "video" },
  { id: 3, name: "Catherine Gracey", img: "/profile-03.jpg", time: "10:20 PM", msg: "Prescription.doc", pinned: true, read: true, type: "file" },
]

const recentChats = [
  { id: 4, name: "Kelly Stevens", img: "/profile-04.jpg", time: "Just Now", msg: "Have you called them?", unread: 1 },
  { id: 5, name: "Robert Miller", img: "/profile-05.jpg", time: "Yesterday", msg: "Video", type: "video", read: true },
  { id: 6, name: "Emily Musick", img: "/profile-01.jpg", time: "10:20 PM", msg: "Project Tools.doc", type: "file" },
  { id: 7, name: "Samuel James", img: "/profile-02.jpg", time: "12:30 PM", msg: "Audio", type: "audio", read: true },
  { id: 8, name: "Dr Shanta Neill", img: "/profile-03.jpg", time: "Yesterday", msg: "Missed Call", type: "missed" },
  { id: 9, name: "Peter Anderson", img: "/profile-04.jpg", time: "23/03/24", msg: "Have you called them?", read: true },
]

const messages = [
  {
    id: 1,
    sender: "Andrea Kearns",
    senderImg: "/profile-01.jpg",
    time: "8:16 PM",
    text: "Hello Doctor, could you tell a diet plan that suits for me?",
    mine: false,
  },
  {
    id: 2,
    dateDivider: "Today, March 25",
  },
  {
    id: 3,
    sender: "Edalin Hendry",
    senderImg: "/doctor-thumb-22.jpg",
    time: "9:45 AM",
    type: "audio",
    duration: "0:05",
    mine: true,
  },
  {
    id: 4,
    sender: "Andrea Kearns",
    senderImg: "/profile-01.jpg",
    time: "9:47 AM",
    type: "link",
    url: "https://www.youtube.com/watch?v=GCmL3mS0Psk",
    preview: "/diet-preview.jpg",
    mine: false,
  },
  {
    id: 5,
    sender: "Edalin Hendry",
    senderImg: "/doctor-thumb-22.jpg",
    time: "9:50 AM",
    type: "images",
    images: ["/diet1.jpg", "/diet2.jpg", "/diet3.jpg"],
    mine: true,
  },
  {
    id: 6,
    sender: "Andrea Kearns",
    senderImg: "/profile-01.jpg",
    time: "8:16 PM",
    type: "location",
    mine: false,
  },
]

export default function Message() {
  const [activeChat, setActiveChat] = useState(pinnedChats[0])
  const [msgInput, setMsgInput] = useState("")
  const [search, setSearch] = useState("")

  return (
    <div className="font-user flex h-[calc(100vh-80px)] bg-gray-50 px-12">

      {/* ===== LEFT SIDEBAR — All Chats ===== */}
      <div className="w-[320px] shrink-0 bg-white border-r border-gray-100 flex flex-col">

        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-lg mb-3">All Chats</h2>

          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-sm outline-none text-gray-600 bg-transparent"
            />
            <RiSearchLine size={16} className="text-gray-400 shrink-0" />
          </div>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto px-4 py-3">

          {/* Online Now */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-gray-700">Online Now</p>
            <button className="text-[#316dff] text-xs font-medium hover:underline">View All</button>
          </div>
          <div className="flex items-center gap-2 mb-5">
            {onlineUsers.map((u) => (
              <div key={u.id} className="relative shrink-0">
                <img src={u.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
              </div>
            ))}
          </div>

          {/* Pinned Chat */}
          <p className="text-sm font-semibold text-gray-700 mb-2">Pinned Chat</p>
          <div className="flex flex-col gap-1 mb-4">
            {pinnedChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} active={activeChat?.id === chat.id} onClick={() => setActiveChat(chat)} />
            ))}
          </div>

          {/* Recent Chat */}
          <p className="text-sm font-semibold text-gray-700 mb-2">Recent Chat</p>
          <div className="flex flex-col gap-1">
            {recentChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} active={activeChat?.id === chat.id} onClick={() => setActiveChat(chat)} />
            ))}
          </div>

        </div>
      </div>

      {/* ===== RIGHT — Chat Window ===== */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/profile-01.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Anderea Kearns</p>
              <p className="text-green-500 text-xs">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
              <RiSearchLine size={18} className="text-gray-500" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
              <RiMoreLine size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
          {messages.map((msg) => {

            // Date divider
            if (msg.dateDivider) return (
              <div key={msg.id} className="flex items-center justify-center">
                <span className="bg-gray-100 text-gray-500 text-xs px-4 py-1 rounded-full">
                  {msg.dateDivider}
                </span>
              </div>
            )

            return (
              <div key={msg.id} className={`flex items-end gap-3 ${msg.mine ? 'flex-row-reverse' : 'flex-row'}`}>

                {/* Avatar */}
                <img src={msg.senderImg} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 mb-1" />

                <div className={`flex flex-col gap-1 max-w-[60%] ${msg.mine ? 'items-end' : 'items-start'}`}>
                  {/* Sender name + time */}
                  <div className={`flex items-center gap-2 ${msg.mine ? 'flex-row-reverse' : ''}`}>
                    <p className="text-sm font-semibold text-gray-800">{msg.sender}</p>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-400 text-xs">{msg.time}</p>
                      <button><RiMoreLine size={14} className="text-gray-400" /></button>
                    </div>
                  </div>

                  {/* Message bubble */}
                  {msg.type === "audio" && (
                    <div className="flex items-center gap-3 bg-[#316dff] text-white px-4 py-3 rounded-2xl rounded-br-sm">
                      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <RiPlayCircleLine size={18} className="text-white" />
                      </button>
                      <div className="flex items-center gap-0.5">
                        {[3, 6, 4, 8, 5, 7, 3, 6, 4, 5].map((h, i) => (
                          <div key={i} className="w-1 bg-white/70 rounded-full" style={{ height: `${h * 2}px` }} />
                        ))}
                      </div>
                      <span className="text-xs text-white/80 shrink-0">{msg.duration}</span>
                    </div>
                  )}

                  {msg.type === "link" && (
                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm max-w-[280px]">
                      <p className="text-xs text-[#316dff] px-3 pt-3 break-all">{msg.url}</p>
                      <img src={msg.preview} alt="" className="w-full h-32 object-cover mt-2 bg-gray-100" />
                    </div>
                  )}

                  {msg.type === "images" && (
                    <div className="flex gap-2">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-24 h-20 rounded-xl bg-gray-200 overflow-hidden">
                          <img src={`/diet${i + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.type === "location" && (
                    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <RiMapPinLine size={18} className="text-[#316dff]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">My Location</p>
                        <button className="text-[#316dff] text-xs font-medium hover:underline flex items-center gap-1">
                          <RiDownloadLine size={12} />
                          Download
                        </button>
                      </div>
                    </div>
                  )}

                  {!msg.type && msg.text && (
                    <div className={`px-4 py-3 rounded-2xl text-sm ${
                      msg.mine
                        ? 'bg-[#316dff] text-white rounded-br-sm'
                        : 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>

        {/* ===== Message Input bar ===== */}
        <div className="bg-white border-t border-gray-100 px-5 py-3 flex items-center gap-3">
          <button className="text-gray-400 hover:text-[#316dff] transition-colors">
            <RiAddCircleLine size={22} />
          </button>
          <button className="text-gray-400 hover:text-[#316dff] transition-colors">
            <RiEmotionLine size={22} />
          </button>
          <button className="text-gray-400 hover:text-[#316dff] transition-colors">
            <RiMicLine size={22} />
          </button>

          <input
            type="text"
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 text-sm text-gray-600 outline-none bg-transparent"
          />

          {/* Send button */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <RiSendPlaneFill size={18} className="text-white" />
          </button>
        </div>

      </div>
    </div>
  )
}

// ===== Chat List Item Component =====
function ChatItem({ chat, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
        active ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <img src={chat.img} alt={chat.name} className="w-10 h-10 rounded-full object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-800 text-sm truncate">{chat.name}</p>
          <p className="text-gray-400 text-xs shrink-0 ml-2">{chat.time}</p>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex items-center gap-1 text-gray-400 text-xs truncate">
            {/* Message type icon */}
            {chat.type === "video" && <RiVideoLine size={12} />}
            {chat.type === "file" && <RiFileTextLine size={12} />}
            {chat.type === "audio" && <RiMicLine size={12} />}
            {chat.type === "missed" && <RiPhoneLine size={12} className="text-red-500" />}
            <span className={chat.type === "missed" ? "text-red-500" : ""}>{chat.msg}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            {chat.pinned && <span className="text-gray-300 text-xs">📌</span>}
            {chat.unread && (
              <span className="w-5 h-5 rounded-full bg-[#316dff] text-white text-xs flex items-center justify-center font-bold">
                {chat.unread}
              </span>
            )}
            {chat.read && !chat.unread && <span className="text-[#316dff] text-xs">✓✓</span>}
          </div>
        </div>
      </div>
    </div>
  )
}