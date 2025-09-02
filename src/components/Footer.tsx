import { Car, MapPin, Mail, Phone, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-4 px-4 border-t border-gray-200">
      {/* Upper section: logo + contact info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center gap-3 mb-2 min-w-[180px]">
          <Image
            src={"/logo.svg"}
            alt="Car Rental Logo"
            width={40}
            height={40}
          />
          <span className="font-semibold text-md">Car Rental</span>
        </div>
        <div className="flex flex-row justify-center items-center w-full md:w-[900px] gap-12">
          <div className="flex flex-col items-center text-center min-w-[200px]">
            <span className="bg-yellow rounded-full p-2 mb-2 inline-block">
              <Phone size={22} className="text-white" />
            </span>
            <span className="text-sm mb-1">Phone</span>
            <span className="font-bold text-base">+537 547-6401</span>
          </div>
          <div className="flex flex-col items-center text-center min-w-[200px]">
            <span className="bg-yellow rounded-full p-2 mb-2 inline-block">
              <Mail size={22} className="text-white" />
            </span>
            <span className="text-sm mb-1">Email</span>
            <span className="font-bold text-base">nwiger@yahoo.com</span>
          </div>
          <div className="flex flex-col items-center text-center min-w-[200px]">
            <span className="bg-yellow rounded-full p-2 mb-2 inline-block">
              <MapPin size={22} className="text-white" />
            </span>
            <span className="text-sm mb-1">Address</span>
            <span className="font-bold text-base">
              Oxford Ave. Cary, NC 27511
            </span>
          </div>
        </div>
      </div>
      {/* Lower section: description/social, links, vehicles, app */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-6">
        {/* Description & Social */}
        <div className="flex flex-col gap-3">
          <div className="text-black font-semibold text-sm mb-1">
            Faucibus faucibus pellentesque dictum turpis.
            <br />
            Id pellentesque turpis massa a id iaculis lorem t...
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook">
              <Image
                src="/socialIcons/facebook.svg"
                alt="Facebook"
                width={22}
                height={22}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/socialIcons/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>
            <a href="#" aria-label="YouTube">
              <Image
                src="/socialIcons/youtube.svg"
                alt="YouTube"
                width={22}
                height={22}
              />
            </a>
            <a href="#" aria-label="twitter">
              <Image
                src="/socialIcons/twitter.svg"
                alt="twitter"
                width={22}
                height={22}
              />
            </a>
          </div>
        </div>
        {/* Useful Links */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm mb-2">Useful links</span>
          <a href="#" className="text-black text-sm hover:underline">
            About us
          </a>
          <a href="#" className="text-black text-sm hover:underline">
            Contact us
          </a>
          <a href="#" className="text-black text-sm hover:underline">
            Gallery
          </a>
          <a href="#" className="text-black text-sm hover:underline">
            Blog
          </a>
          <a href="#" className="text-black text-sm hover:underline">
            F.A.Q
          </a>
        </div>
        {/* Vehicles */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm mb-2">Vehicles</span>
          <span className="text-black text-sm">Sedan</span>
          <span className="text-black text-sm">Cabriolet</span>
          <span className="text-black text-sm">Pickup</span>
          <span className="text-black text-sm">Minivan</span>
          <span className="text-black text-sm">SUV</span>
        </div>
        {/* Download App */}
        <div className="flex flex-col gap-3 items-start">
          <span className="font-semibold text-sm mb-2">Download App</span>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/appStore.svg"
              alt="App Store"
              width={120}
              height={36}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/playStore.svg"
              alt="Google Play"
              width={120}
              height={36}
            />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs py-2">
        © Copyright Car Rental 2024. Design by Figma. guru
      </div>
    </footer>
  );
}
