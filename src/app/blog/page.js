import BlogPage from '@/components/home/HomeBlog/BlogPage'

export const metadata = {
  title: "Blog & Insights",
  description: "Stay updated with the latest trends in software development, AI, web development, and technology. Read expert insights and guides from BD Stack Solutions.",
  openGraph: {
    title: "Blog & Insights | BD Stack Solutions",
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