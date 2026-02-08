import PrivacyPolicy from '@/components/home/HomePolicies/PrivacyPolicy'

export const metadata = {
  title: "Privacy Policy",
  description: "Read BD Stack Solutions privacy policy. Learn how we collect, use, and protect your personal information and data.",
  openGraph: {
    title: "Privacy Policy | BD Stack Solutions",
    description: "Read BD Stack Solutions privacy policy. Learn how we collect, use, and protect your personal information and data."
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
