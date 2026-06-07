import "./globals.css";

export const metadata = {
  title: "Wedding",
  description: "Wedding Invite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}