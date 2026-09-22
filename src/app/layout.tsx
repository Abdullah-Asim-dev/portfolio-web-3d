import type { Metadata } from "next";
import "./globals.css";

// 🚀 FIXED METADATA: Browser tab parameters updated with name and field matrix
export const metadata: Metadata = {
  title: "Abdullah Asim | Full-Stack Developer & AI  Developer",
  description: "Official engineering portfolio of Abdullah Asim. Specializing in Next.js SaaS setups, n8n automations, and Vapi AI calling voice agents.",
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
      <body className="antialiased bg-[#040911]">
        {children}
      </body>
    </html>
  );
}
