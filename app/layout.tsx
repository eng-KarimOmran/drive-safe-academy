import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Toaster } from "sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drive-safe-academy.com"),

  title: {
    default: "Drive Safe Academy | أكاديمية درايف سيف لتعليم القيادة",
    template: "%s | Drive Safe Academy",
  },

  description:
    "تعلم قيادة السيارات مع أكاديمية درايف سيف بالإسكندرية. تدريب على السيارات المانيوال والأوتوماتيك مع مدربين محترفين وبرامج تدريب تناسب جميع المستويات.",

  keywords: [
    "Drive Safe Academy",
    "درايف سيف",
    "تعليم القيادة",
    "مدرسة تعليم قيادة",
    "قيادة السيارات",
    "تعليم السواقة",
    "مانيوال",
    "أوتوماتيك",
    "الإسكندرية",
  ],

  authors: [{ name: "Drive Safe Academy" }],
  creator: "Drive Safe Academy",
  publisher: "Drive Safe Academy",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Drive Safe Academy | أكاديمية درايف سيف",
    description:
      "ابدأ رحلتك في تعلم القيادة مع مدربين محترفين وبرامج تدريب عملية تناسب جميع المستويات.",
    url: "https://drive-safe-academy.com",
    siteName: "Drive Safe Academy",
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drive Safe Academy",
    description: "تعلم قيادة السيارات مع أكاديمية درايف سيف بالإسكندرية.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors={true} position="top-center" />
      </body>
    </html>
  );
}
