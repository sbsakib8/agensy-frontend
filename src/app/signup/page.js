import SignUpPage from "@/components/header/SignUp";

export const metadata = {
  title: "Sign Up",
  description: "Create your BD Stack Solutions account. Join us to access premium software development services and solutions.",
  robots: {
    index: false,
    follow: false
  }
};

export default function SignUpRoute() {
  return <SignUpPage />;
}