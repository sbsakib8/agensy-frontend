import PrivacyPolicy from '@/components/home/HomePolicies/PrivacyPolicy'

export const metadata = {
  title: "Privacy Policy",
  description: "Read SoftStack Agency privacy policy. Learn how we collect, use, and protect your personal information and data.",
  openGraph: {
    title: "Privacy Policy | SoftStack Agency",
    description: "Read SoftStack Agency privacy policy. Learn how we collect, use, and protect your personal information and data."
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
