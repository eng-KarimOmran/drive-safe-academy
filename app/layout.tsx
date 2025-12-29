import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Drive Safe Academy",
  description: "أكاديمية لتعليم القيادة بطريقة احترافية وآمنة.",
  icons: {
    icon: "https://res.cloudinary.com/djim8u2rt/image/upload/v1766936462/logo_mtctog.png",
  },
  openGraph: {
    title: "Drive Safe Academy",
    description: "أكاديمية لتعليم القيادة بطريقة احترافية وآمنة.",
    url: "https://drivesafe-three.vercel.app/",
    siteName: "Drive Safe Academy",
    images: [
      {
        url: "https://res.cloudinary.com/djim8u2rt/image/upload/v1766936462/logo_mtctog.png",
        width: 1200,
        height: 630,
        alt: "Drive Safe Academy",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Safe Academy",
    description: "أكاديمية لتعليم القيادة بطريقة احترافية وآمنة.",
    images: [
      "https://res.cloudinary.com/djim8u2rt/image/upload/v1766936462/logo_mtctog.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.className}
      suppressHydrationWarning
    >
      <body className="bg-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full">{children}</main>
          <Toaster richColors={true} position="top-center" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
