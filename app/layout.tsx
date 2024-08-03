import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Pratham shinde",
  description:
    "Dashboard created by praatham shinde using NextJs, Tailwind css, ShadCn, recharts, Typescript ...",
  icons: {
    icon: {
      url: "/logo.png",
      href: "logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
