import TutorialsPage from '@/components/home/HomeTutorial/TutorialsPage'

export const metadata = {
  title: "Tutorials & Guides",
  description: "Learn with step-by-step tutorials and guides covering web development, AI implementation, mobile app development, and more from SoftStack Agency experts.",
  openGraph: {
    title: "Tutorials & Guides | SoftStack Agency",
    description: "Learn with step-by-step tutorials and guides covering web development, AI implementation, mobile app development, and more."
  }
};

import React from 'react'

function page() {
  return (
    <div>
        <TutorialsPage />
        

    </div>
  )
}

export default page