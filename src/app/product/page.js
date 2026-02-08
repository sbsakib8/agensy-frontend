import ProductsSection from '@/components/product/productSection'

export const metadata = {
  title: "Our Products",
  description: "Discover innovative software products and solutions from SoftStack Agency. Browse our portfolio of web applications, mobile apps, AI tools, and custom software solutions.",
  openGraph: {
    title: "Our Products | SoftStack Agency",
    description: "Discover innovative software products and solutions from SoftStack Agency."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <ProductsSection />
    </div>
  )
}

export default page