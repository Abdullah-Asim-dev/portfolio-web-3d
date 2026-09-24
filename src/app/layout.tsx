import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahasim-dev.vercel.app"),

  title: {
    default: "Abdullah Asim | Full-Stack Developer",
    template: "%s | Abdullah Asim",
  },

  description:
    "Abdullah Asim is a Full-Stack Developer specializing in React, Next.js, Node.js, SaaS applications, and AI automation.",

  keywords: [
    "Abdullah Asim",
    "Abdullah Asim Dev",
    "Abdullah Asim Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Automation",
    "Web Developer",
    "Pakistan Developer",
  ],

  authors: [{ name: "Abdullah Asim" }],
  creator: "Abdullah Asim",

  alternates: {
    canonical: "https://abdullahasim-dev.vercel.app",
  },

  openGraph: {
    title: "Abdullah Asim | Full-Stack Developer",
    description:
      "Portfolio of Abdullah Asim — Full-Stack Developer specializing in React, Next.js, SaaS applications, and AI automation.",
    url: "https://abdullahasim-dev.vercel.app",
    siteName: "Abdullah Asim",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullah Asim | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, SaaS applications, and AI automation.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#040911]">{children}</body>
    </html>
  );
}
