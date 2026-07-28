import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { navLinks } from "./nav-links";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-white shadow z-30">
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <div className="flex flex-col items-center">
            <Image
              src="/drive-safe-academy-logo.png"
              alt="logo"
              width={50}
              height={50}
              priority
            />
            <span>Drive Safe</span>
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="link-hover text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Button variant="primary">
            <Link href="/#programs">احجز الآن</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
