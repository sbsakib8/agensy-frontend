"use client";

import Image from "next/image";

export default function BlogPage() {
  const particles = Array.from({ length: 30 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  const blogs = [
    {
      title: "How to Build Modern Web Apps",
      desc: "Learn the latest techniques in web development to build fast, responsive, and beautiful web apps.",
      img: "https://i.ibb.co.com/4R5tWBBs/download-10.jpg",
    },
    {
      title: "Top 10 JavaScript Tips",
      desc: "Boost your JS skills with these practical tips that every developer should know.",
      img: "https://i.ibb.co.com/rKS1rgbD/download-11.jpg",
    },
    {
      title: "React Performance Optimization",
      desc: "Optimize your React applications for maximum performance and smoother user experience.",
      img: "https://i.ibb.co.com/KpVdVB5y/download-2.png",
    },
    {
      title: "Node.js Best Practices",
      desc: "Write clean, maintainable, and efficient Node.js code with these best practices.",
      img: "https://i.ibb.co.com/RGxpxs2b/download-12.jpg",
    },
    {
      title: "CSS Tricks You Should Know",
      desc: "Enhance your frontend designs with these essential CSS tricks and hacks.",
      img: "https://i.ibb.co.com/BVQsTHT7/images-7.jpg",
    },
    {
      title: "Deploying Your App to Production",
      desc: "Step-by-step guide to safely deploy your applications to production servers.",
      img: "https://i.ibb.co.com/1tCCQM4H/download-13.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-6 py-24 text-white">
      {/* ================= Full-screen Animated Background ================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* ================= Page Header ================= */}
      <div className="text-center mb-16 mt-12 md:mt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Our Blog
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl">
          Explore our latest articles, tutorials, and tips to boost your skills and knowledge.
        </p>
      </div>

      {/* ================= Blog Grid ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col bg-white/5 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-300 text-sm">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
