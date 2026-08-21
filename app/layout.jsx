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
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a8772e1b56df5344af1bc05/1k0ghhgo7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
          `}
        </Script>
      </body>
    </html>
  );
}
