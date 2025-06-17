import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dusmanta Biswal",
  description: "Aspiring web developer building responsive websites and web apps with modern technologies. Explore my projects, skills, and resume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen py-4">
          {/* Left Margin (Desktop only) */}
          <div className="hidden lg:block w-[17.5%]" />

          {/* Sidebar (Desktop only) */}
          <aside className="hidden lg:block w-[21%]">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-4 lg:px-0 lg:w-[44%] lg:pl-4">
            {/* Mobile Sidebar */}
            <div className="lg:hidden mb-4">
              <Sidebar />
            </div>

            <Navbar />
            {children}
          </main>

          {/* Right Margin (Desktop only) */}
          <div className="hidden lg:block w-[17.5%]" />
        </div>
      </body>
    </html>

  );
}
