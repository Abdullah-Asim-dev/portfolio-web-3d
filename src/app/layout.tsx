import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://abdullahasim-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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
  publisher: "Abdullah Asim",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Abdullah Asim | Full-Stack Developer",
    description:
      "Portfolio of Abdullah Asim — Full-Stack Developer specializing in React, Next.js, SaaS applications, and AI automation.",
    url: siteUrl,
    siteName: "Abdullah Asim",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.webp",
        width: 800,
        height: 800,
        alt: "Abdullah Asim - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdullah Asim | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, SaaS applications, and AI automation.",
    images: ["/profile.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Asim",
    url: siteUrl,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, SaaS applications, and AI automation.",
    image: `${siteUrl}/profile.webp`,
    sameAs: [
      "https://github.com/Abdullah-Asim-dev",
      "https://www.linkedin.com/in/abdullah-asim-dev/",
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased bg-[#040911]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-S923PMDYVR" />
      </body>
    </html>
  );
}