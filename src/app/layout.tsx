import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shrikhand } from "next/font/google";
import "./globals.css";
import Sidebar from "./dashboard/side-bar/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

export const metadata: Metadata = {
  title: "Skill^3",
  description:
    "Verify the skills that matter to you with blockchain certification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${shrikhand.variable}`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
