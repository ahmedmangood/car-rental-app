import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-3 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Car Rental Logo" width={40} height={40} />
        <span className="ml-2 font-semibold text-black">Car Rental</span>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-8 mx-auto">
        <Link href="/" className="text-black hover:text-blue">
          Home
        </Link>
        <Link href="/vehicles" className="text-black font-bold hover:text-blue">
          Vehicles
        </Link>
        <Link href="/details" className="text-black hover:text-blue">
          Details
        </Link>
        <Link href="/about-us" className="text-black hover:text-blue">
          About Us
        </Link>
        <Link href="/contact-us" className="text-black hover:text-blue">
          Contact Us
        </Link>
      </nav>

      {/* Help Section */}
      <div className="flex items-center gap-2">
        <div className="bg-blue rounded-full p-2 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.06.37 2.09.72 3.08a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.99.35 2.02.59 3.08.72a2 2 0 011.72 2z" />
          </svg>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-xs text-black">Need help?</span>
          <span className="text-sm font-semibold text-black">
            +996 247-1680
          </span>
        </div>
      </div>
    </header>
  );
}
