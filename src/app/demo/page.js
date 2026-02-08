import OurProjects from '@/components/product/OurProjects'

export const metadata = {
  title: "Demo Projects & Portfolio",
  description: "Explore our demo projects and portfolio showcasing innovative solutions in web development, mobile apps, AI, and e-commerce by SoftStack Agency.",
  openGraph: {
    title: "Demo Projects & Portfolio | SoftStack Agency",
    description: "Explore our demo projects and portfolio showcasing innovative solutions in web development, mobile apps, AI, and e-commerce."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <OurProjects />
        

    </div>
  )
}

export default page