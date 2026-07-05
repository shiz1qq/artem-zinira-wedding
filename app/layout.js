import "./globals.css";

export const metadata = {
  title: "Wedding",
  description: "Wedding invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}