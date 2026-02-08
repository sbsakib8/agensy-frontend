import SignInPage from "@/components/header/Signin";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your SoftStack Agency account. Access your dashboard, projects, and services.",
  robots: {
    index: false,
    follow: false
  }
};

export default function SignInRoute() {
  return <SignInPage />;
}