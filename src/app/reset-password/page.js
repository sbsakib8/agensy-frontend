import { Suspense } from 'react';
// import ResetPasswordPage from '@/components/auth/ResetPassword';

function ResetPasswordLoading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<ResetPasswordLoading />}>
      {/* <ResetPasswordPage /> */}
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <p>Reset Password page - Under construction</p>
      </div>
    </Suspense>
  );
}