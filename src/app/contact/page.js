import ContactPage from '@/components/home/HomeContact/ContactPage'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with SoftStack Agency for your software development needs. Contact our team for custom solutions, consultations, and project inquiries.",
  openGraph: {
    title: "Contact Us | SoftStack Agency",
    description: "Get in touch with SoftStack Agency for your software development needs."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <ContactPage />
        

    </div>
  )
}

export default page