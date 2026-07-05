import "./globals.css";

import {
  Cormorant_Garamond,
  Great_Vibes,
  Montserrat,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Артем & Зинира",
  description: "Wedding invitation",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ru">
      <body
        className={`
          ${cormorant.variable}
          ${vibes.variable}
          ${montserrat.variable}
        `}
      >
        {children}
      </body>
    </html>
  );

}