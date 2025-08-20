import "./globals.css";
import Header from "../components/Header";
import BackgroundFX from "../components/BackgroundFX";
import { lexend } from '../styles/fonts';

export const metadata = {
  title: "Reverie Tech",
  description: "Innovative Technology Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white {lexend.className}">
        <BackgroundFX />
        <Header />
        {children}
      </body>
    </html>
  );
}
