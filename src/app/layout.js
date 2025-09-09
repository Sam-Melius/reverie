import "./globals.css";
import Header from "../components/Header";
import BackgroundFX from "../components/BackgroundFX";
import { roboto } from '../styles/fonts';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Reverie Tech Solutions",
  description: "Innovative Technology Solutions",
  icons: {
    icon: "/favicon.ico",             // ✅ square icon preferred
    shortcut: "/favicon.ico",
    apple: "/favicon.png",            // optional
  },
  openGraph: {
    title: "Reverie Tech Solutions",
    description: "Innovative Technology Solutions",
    url: "https://reverietech.com",
    siteName: "Reverie Tech Solutions",
    images: [
      {
        url: "https://reverietech.com/LogoWhiteText.png", // this is fine for social previews
        width: 1200,
        height: 630,
        alt: "Reverie Tech Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverie Tech Solutions",
    description: "Innovative Technology Solutions",
    images: ["https://reverietech.com/LogoWhiteText.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
        </head>
      <body className={`bg-black text-white ${roboto.className}`}>
        <BackgroundFX />
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
