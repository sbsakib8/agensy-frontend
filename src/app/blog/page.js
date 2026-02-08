import BlogPage from '@/components/home/HomeBlog/BlogPage'

export const metadata = {
  title: "Blog & Insights",
  description: "Stay updated with the latest trends in software development, AI, web development, and technology. Read expert insights and guides from SoftStack Agency.",
  openGraph: {
    title: "Blog & Insights | SoftStack Agency",
    description: "Stay updated with the latest trends in software development, AI, web development, and technology."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <BlogPage />
        

    </div>
  )
}

export default page