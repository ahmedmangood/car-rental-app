import { SignInForm } from "@/components";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
}
