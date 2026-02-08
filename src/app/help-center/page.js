import HelpCenterPage from '@/components/home/HomeHelpCenter/HelpCenterPage'

export const metadata = {
  title: "Help Center & Support",
  description: "Find answers to your questions about our services, products, and solutions. Access FAQs, guides, and support resources at SoftStack Agency Help Center.",
  openGraph: {
    title: "Help Center & Support | SoftStack Agency",
    description: "Find answers to your questions about our services, products, and solutions."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <HelpCenterPage/>
        

    </div>
  )
}

export default page