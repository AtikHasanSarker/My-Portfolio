import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Providers } from "./providers";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Atik Hasan's Portfolio",
  description: "Frontend Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${poppins.variable} relative min-h-screen transition-colors duration-300`}
      >
        <Providers>
          <div className="relative z-20">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
        <BackToTop />
        <Script
          id="tawk-to"
          src="https://embed.tawk.to/6a8772e1b56df5344af1bc05/1k0ghgh07"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
