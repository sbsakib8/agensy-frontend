import CustomersPage from '@/components/home/HomeCustomer/CustomerPage'

export const metadata = {
  title: "Our Clients & Success Stories",
  description: "Discover how SoftStack Agency has helped businesses transform digitally. Read success stories and testimonials from our satisfied clients worldwide.",
  openGraph: {
    title: "Our Clients & Success Stories | SoftStack Agency",
    description: "Discover how SoftStack Agency has helped businesses transform digitally."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <CustomersPage />
        

    </div>
  )
}

export default page