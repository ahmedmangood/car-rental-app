import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white bg-opacity-80 shadow">
      <h1 className="text-2xl font-bold text-blue-700">CarRent</h1>
      <nav className="flex gap-4">
        <Link href="/auth/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
