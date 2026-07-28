import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "../components/sections/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import FacebookPixel from "@/script/FacebookPixel";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drive-safe-academy.com"),

  title: {
    default:
      "Drive Safe Academy | أكاديمية درايف سيف لتعليم القيادة بالإسكندرية",
    template: "%s | Drive Safe Academy",
  },

  description:
    "Drive Safe Academy هي أكاديمية متخصصة في تعليم قيادة السيارات في الإسكندرية. نقدم تدريبًا عمليًا ونظريًا على السيارات المانيوال والأوتوماتيك مع مدربين محترفين.",

  keywords: [
    "Drive Safe Academy",
    "تعليم القيادة",
    "تعليم السواقة",
    "مدرسة تعليم قيادة",
    "أكاديمية قيادة",
    "Driving School Alexandria",
    "Driving Academy Egypt",
    "تعليم قيادة الإسكندرية",
    "تعليم قيادة سيارات",
    "مانيوال",
    "أوتوماتيك",
    "Alexandria Driving School",
  ],

  authors: [
    {
      name: "Drive Safe Academy",
    },
  ],

  creator: "Drive Safe Academy",

  publisher: "Drive Safe Academy",

  category: "Education",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://drive-safe-academy.com",
    siteName: "Drive Safe Academy",
    title: "Drive Safe Academy | أكاديمية تعليم القيادة بالإسكندرية",
    description:
      "تعلم قيادة السيارات مع مدربين محترفين في الإسكندرية. دورات للمانيوال والأوتوماتيك مع تدريب عملي ونظري.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drive Safe Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Drive Safe Academy",
    description: "أفضل أكاديمية لتعليم القيادة بالإسكندرية.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://drive-safe-academy.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
      <FacebookPixel pixelId={pixelId} />
    </html>
  );
}
