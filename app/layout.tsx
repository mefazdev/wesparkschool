import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
