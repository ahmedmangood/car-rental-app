import Image from "next/image";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md border-b border-gray-100">
      <div className="flex items-center gap-2">
        <Link href="/" aria-label="Go to homepage">
          <Image src="/logo.svg" alt="Car Rental Logo" width={36} height={36} />
        </Link>
        <span className="ml-2 font-bold text-lg text-black">Admin Panel</span>
      </div>
      <nav className="flex gap-8">
        <Link
          href="/admin/cars"
          className="text-black font-medium hover:text-[#6C4CF1]"
        >
          Cars
        </Link>
        <Link
          href="/admin/bookings"
          className="text-black font-medium hover:text-[#6C4CF1]"
        >
          Bookings
        </Link>
        <Link
          href="/admin/customers"
          className="text-black font-medium hover:text-[#6C4CF1]"
        >
          Customers
        </Link>
      </nav>
    </header>
  );
}
