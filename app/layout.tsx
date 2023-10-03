import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Router Testing",
  description: "This is a test of Next.js app router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
