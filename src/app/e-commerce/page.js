import Ecommerce from '@/components/home/HomeEcommerce/Ecommerce'

export const metadata = {
  title: "E-commerce Solutions",
  description: "Build powerful online stores with BD Stack Solutions e-commerce development services. Custom shopping platforms, payment integration, and scalable solutions for your business.",
  openGraph: {
    title: "E-commerce Solutions | BD Stack Solutions",
    description: "Build powerful online stores with BD Stack Solutions e-commerce development services."
  }
};

import React from 'react'

function page() {
  return (
    <div>
      <Ecommerce />
    </div>
  )
}

export default page