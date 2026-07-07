import React from 'react'
import { Link } from "react-router-dom"
import { RiArrowRightLine } from "@remixicon/react"

const blogs = [
  {
    img: "/article-01.webp",
    day: "15",
    month: "May",
    category: "Treatments",
    title: "Understanding and Preventing...",
    text: "Glaucoma is a leading cause of blind worldwide, yet many....",
    link: "/blog/glaucoma-treatment",
  },
  {
    img: "/article-02.webp",
    day: "18",
    month: "May",
    category: "Neurology",
    title: "Neurology & Technology: A Ne...",
    text: "Discover the intersection of technology and neurology,...",
    link: "/blog/neurology-technology",
  },
]

export default function RecentBlogs() {
  return (
    <section className="w-full pb-12 md:pb-20 bg-white font-user relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-18">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white mb-4 md:mb-6 text-sm"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>Recent Blogs</span>
            <span>•</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold text-gray-900">
            Stay Updated With Our{" "}
            <span style={{ color: "#316dff" }}>Latest Articles</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-3 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 items-center">

                {/* Image + Date badge */}
                <div className="relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-[180px] md:h-[200px] object-cover rounded-xl"
                  />
                  <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1.5 text-center shadow-sm">
                    <p className="text-xl md:text-2xl font-extrabold text-gray-900 leading-none">
                      {blog.day}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{blog.month}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 sm:px-0">
                  <span
                    className="inline-block text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-md mb-3 md:mb-4"
                    style={{ backgroundColor: "#316dff" }}
                  >
                    {blog.category}
                  </span>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight mb-2 md:mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">
                    {blog.text}
                  </p>

                  <Link
                    to={blog.link}
                    className="text-sm md:text-base underline text-[#316dff] hover:opacity-80 transition-opacity duration-300"
                  >
                    Read More
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-10 md:mt-14">
          <Link
            to="/blogs"
            className="flex items-center gap-2 bg-[#000103] text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-full hover:bg-[#316dff] transition-colors duration-300"
          >
            View All Articles
            <RiArrowRightLine size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}