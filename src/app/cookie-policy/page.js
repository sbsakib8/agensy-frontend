import CookiePolicy from '@/components/home/HomePolicies/CookiePolicy'

export const metadata = {
  title: "Cookie Policy",
  description: "Learn about how SoftStack Agency uses cookies and similar technologies to enhance your browsing experience.",
  openGraph: {
    title: "Cookie Policy | SoftStack Agency",
    description: "Learn about how SoftStack Agency uses cookies and similar technologies to enhance your browsing experience."
  }
};

export default function CookiePolicyPage() {
  return <CookiePolicy />
}
