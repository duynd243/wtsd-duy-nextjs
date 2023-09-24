import { Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
