import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Kumar",
  description: "I am an Engineer that specializes in Software and web development. I make high quality web sites in all manner of technologies such as NEXT JS, React JS, ExpressJS, Spring Boot. i also code in several languages such as JavaScript, TypeScript, Java, Python, C, C++, C# and other languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SpeedInsights />
        Site Shutdown
      </body>
    </html>
  );
}
