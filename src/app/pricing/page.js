import PricingSection from "@/components/home/HomePricing/PricingSection"

export const metadata = {
  title: "Pricing Plans",
  description: "Explore affordable pricing plans for software development, AI solutions, web development, and mobile apps. Choose the perfect plan for your business needs at SoftStack Agency.",
  openGraph: {
    title: "Pricing Plans | SoftStack Agency",
    description: "Explore affordable pricing plans for software development, AI solutions, web development, and mobile apps."
  }
};

import React from 'react'

function page() {
  return (
    <div>
      <PricingSection />
    </div>
  )
}

export default page