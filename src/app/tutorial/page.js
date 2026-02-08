import TutorialsPage from '@/components/home/HomeTutorial/TutorialsPage'

export const metadata = {
  title: "Tutorials & Guides",
  description: "Learn with step-by-step tutorials and guides covering web development, AI implementation, mobile app development, and more from BD Stack Solutions experts.",
  openGraph: {
    title: "Tutorials & Guides | BD Stack Solutions",
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