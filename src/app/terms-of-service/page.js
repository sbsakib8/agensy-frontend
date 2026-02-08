import TermsOfService from '@/components/home/HomePolicies/TermsOfService'

export const metadata = {
  title: "Terms of Service",
  description: "Read SoftStack Agency terms of service. Understand the rules and guidelines for using our services and platform.",
  openGraph: {
    title: "Terms of Service | SoftStack Agency",
    description: "Read SoftStack Agency terms of service. Understand the rules and guidelines for using our services and platform."
  }
};

export default function TermsOfServicePage() {
  return <TermsOfService />
}
