import ProductsSection from '@/components/product/productSection'

export const metadata = {
  title: "Our Products",
  description: "Discover innovative software products and solutions from BD Stack Solutions. Browse our portfolio of web applications, mobile apps, AI tools, and custom software solutions.",
  openGraph: {
    title: "Our Products | BD Stack Solutions",
    description: "Discover innovative software products and solutions from BD Stack Solutions."
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