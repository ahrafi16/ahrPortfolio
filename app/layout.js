import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Montserrat } from 'next/font/google';
import { SparklesCore } from "@/components/ui/sparkles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anjum Hossain | Web Developer Portfolio",
  description: "Personal portfolio showcasing my skills, projects, and contact information",
};

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'], // choose the weights you need
  subsets: ['latin'], // character sets
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${montserrat.className}`}>
        <div className="min-h-screen w-full bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px]"></div>

          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            speed={0.1}
            particleDensity={20}
            className="w-full h-full absolute inset-0 pointer-events-none"
            particleColor="#FFFFFF"
          />

          <div className="relative z-10 px-30 mx-auto">
            <Navbar />
            <main>

              {children}
            </main>

          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}