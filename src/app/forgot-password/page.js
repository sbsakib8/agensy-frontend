import ForgotPasswordPage from '@/components/header/Fogotpass';

export const metadata = {
  title: "Forgot Password",
  description: "Reset your SoftStack Agency account password. Enter your email to receive password reset instructions.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ForgotPassword() {
  return <ForgotPasswordPage />;
}