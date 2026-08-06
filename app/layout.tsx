import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frontend Engineer | Emmanuel Omonzebaguan",
  description:
    "Offering professional development services, Emmanuel Omonzebaguan specializes in building modern web applications, responsive frontend interfaces, and scalable backend systems. Explore services in React.js, Next.js, Node.js, and database integration.",
  keywords: [
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "web application development",
    "custom web solutions",
    "responsive design",
    "database integration",
    "Emmanuel Omonzebaguan",
    "I need a frontend developer",
    "I need a backend developer",
    "I need a full-stack developer",
    "I need a React developer",
    "I need a Next.js developer",
    "I need a react native developer",
    "I need a mobile app developer",
    "I need a web developer",
  ],
  openGraph: {
    title: "Frontend Engineer | Emmanuel Omonzebaguan",
    description:
      "Frontend Engineer with 4+ years building production-grade web applications in React.js, Next.js, and TypeScript across SaaS, fintech, and healthcare. Open to remote roles.",
    type: "website",
    url: "https://codeplan.vercel.app/",
    images: [
      {
        url: "https://codeplan.vercel.app/profile.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Omonzebaguan's Full-Stack Developer Services Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codecps",
    title: "Frontend Engineer | Emmanuel Omonzebaguan",
    description:
      "Explore professional services in frontend and backend development by Emmanuel Omonzebaguan. From modern web interfaces to scalable backend systems, Emmanuel is your go-to developer for React.js, Next.js, and Node.js solutions.",
    images: ["https://codeplan.vercel.app/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Frontend Engineer with 4+ years building production-grade web applications in React.js, Next.js, and TypeScript across SaaS, fintech, and healthcare. Open to remote roles."
        />
        <meta
          name="keywords"
          content="full-stack developer, frontend developer, backend developer, React developer, Next.js developer, Node.js developer, web application development, custom web solutions, responsive design, database integration, Emmanuel Omonzebaguan"
        />
        <meta
          property="og:title"
          content="Frontend Engineer | Emmanuel Omonzebaguan"
        />
        <meta
          property="og:description"
          content="Frontend Engineer with 4+ years building production-grade web applications in React.js, Next.js, and TypeScript across SaaS, fintech, and healthcare. Open to remote roles."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://codewithomonz.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://codewithomonz.vercel.app/profile.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codewithomonz" />
        <meta
          name="twitter:title"
          content="Frontend Engineer | Emmanuel Omonzebaguan"
        />
        <meta
          name="twitter:description"
          content="Frontend Engineer with 4+ years building production-grade web applications in React.js, Next.js, and TypeScript across SaaS, fintech, and healthcare. Open to remote roles."
        />
        <meta
          name="twitter:image"
          content="https://codewithomonz.vercel.app/profile.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Analytics />
      </body>
    </html>
  );
}
