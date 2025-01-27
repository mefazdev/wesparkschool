import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "WE SPARK INTERNATIONAL SCHOOL",
  description: `Welcome to We Spark International School, where cultural heritage
              meets holistic development. Our interconnected national and
              international curriculum delivers exceptional education. Within a
              nurturing environment, we uphold the values of freedom, equity,
              ethics, and democracy. By integrating these principles into our
              teaching, we empower students to thrive in an ever-changing world.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
      
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
        {children}
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="beforeInteractive"
        />
        <Script id="aos-init" strategy="lazyOnload" />
      </body>
    </html>
  );
}
