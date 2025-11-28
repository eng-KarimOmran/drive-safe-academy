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
  title: "Drive-Safe Academy",
  description: "أكاديمية لتعليم القيادة بطريقة احترافية وآمنة.",
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
          defaultTheme="system"
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