import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the weights you need
  variable: "--font-roboto",
});
