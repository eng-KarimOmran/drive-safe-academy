import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { path: "/#home", label: "الرئيسية" },
    { path: "/#why-us", label: "ليه تختارنا" },
    { path: "/#programs", label: "برامجنا" },
    { path: "/#trainers", label: "المدربون" },
    { path: "/#reviews", label: "آراء المتدربين" },
    { path: "/#faq", label: "الأسئلة الشائعة" },
    { path: "/#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="w-full p-2">
      <main className="flex justify-between items-center px-2 md:px-4">
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-14"
            src="https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764293017/logo_wkleeh.png"
            alt="logo"
          />
          <h2 className="text-lg md:text-xl font-bold">DriveSafe</h2>
        </div>
        <ul className="hidden lg:flex justify-center items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                className="hover:text-(--main-color) transition-colors duration-300"
                href={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-2">
          <Button variant="main" asChild>
            <Link href="/#programs">احجز الآن</Link>
          </Button>
          <ModeToggle />
        </div>
      </main>
      <Separator className="mt-4" />
    </nav>
  );
}
