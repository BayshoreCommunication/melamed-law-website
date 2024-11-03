import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Melamed Law ",
  description:
    "At Melamed Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. Every client gets the personal cell phone number of the attorney.",
  metadataBase: new URL("https://www.melamedlawpllc.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
