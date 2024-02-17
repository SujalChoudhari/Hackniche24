// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AuthContextProvider } from "@/context/AuthContext";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaBagShopping, FaChair, FaDollarSign, FaFlag, FaLock, FaTable, FaUserGroup } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // manifest: "./manifest.json",
  title: "VersionX",
  description: "",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Features",
    link: "/features",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Feedback",
    link: "/feedback",
    icon: <FaUserGroup className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Login",
    link: "/login",
    icon: <FaLock className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Register",
    link: "/register",
    icon: <FaFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en" className="">
      <body className={inter.className}>
      <FloatingNav navItems={navItems} />
        <Toaster />
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>

  );
}
