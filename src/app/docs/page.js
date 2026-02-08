import DocumentationPage from '@/components/home/HomeDocs/DocumentationPage'

export const metadata = {
  title: "Documentation",
  description: "Comprehensive documentation and guides for SoftStack Agency products and services. Learn how to integrate and use our solutions effectively.",
  openGraph: {
    title: "Documentation | SoftStack Agency",
    description: "Comprehensive documentation and guides for SoftStack Agency products and services."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <DocumentationPage />
        

    </div>
  )
}

export default page