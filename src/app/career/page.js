import CareerPage from '@/components/home/HomeCareer/CareerPage'

export const metadata = {
  title: "Careers & Jobs",
  description: "Join the BD Stack Solutions team! Explore exciting career opportunities in software development, AI, design, and technology. Build your future with us.",
  openGraph: {
    title: "Careers & Jobs | BD Stack Solutions",
    description: "Join the BD Stack Solutions team! Explore exciting career opportunities in software development, AI, design, and technology."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <CareerPage />
        

    </div>
  )
}

export default page