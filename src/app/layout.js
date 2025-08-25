import "./globals.css";
import Header from "../components/Header";
import BackgroundFX from "../components/BackgroundFX";
import { roboto } from '../styles/fonts';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Reverie Tech",
  description: "Innovative Technology Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${roboto.className}`}>
        <BackgroundFX />
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
