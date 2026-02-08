import CookiePolicy from '@/components/home/HomePolicies/CookiePolicy'

export const metadata = {
  title: "Cookie Policy",
  description: "Learn about how BD Stack Solutions uses cookies and similar technologies to enhance your browsing experience.",
  openGraph: {
    title: "Cookie Policy | BD Stack Solutions",
    description: "Learn about how BD Stack Solutions uses cookies and similar technologies to enhance your browsing experience."
  }
};

export default function CookiePolicyPage() {
  return <CookiePolicy />
}
