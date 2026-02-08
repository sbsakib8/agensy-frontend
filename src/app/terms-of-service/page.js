import TermsOfService from '@/components/home/HomePolicies/TermsOfService'

export const metadata = {
  title: "Terms of Service",
  description: "Read BD Stack Solutions terms of service. Understand the rules and guidelines for using our services and platform.",
  openGraph: {
    title: "Terms of Service | BD Stack Solutions",
    description: "Read BD Stack Solutions terms of service. Understand the rules and guidelines for using our services and platform."
  }
};

export default function TermsOfServicePage() {
  return <TermsOfService />
}
