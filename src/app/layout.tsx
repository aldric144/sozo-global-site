import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SOZO Global School of the Supernatural & Biblical Studies",
    template: "%s | SOZO Global",
  },
  description:
    "Empowering Nations. Advancing the Kingdom. A world-class institution offering diploma, master's, and doctoral programs in supernatural ministry and biblical studies.",
  keywords:
    "SOZO Global, supernatural ministry school, biblical studies, prophetic training, theological education, Christian university, online ministry school, doctoral program, masters degree",
  openGraph: {
    title: "SOZO Global School of the Supernatural & Biblical Studies",
    description:
      "Empowering Nations. Advancing the Kingdom. World-class theological education.",
    url: "https://sozoglobal.school",
    siteName: "SOZO Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOZO Global School of the Supernatural & Biblical Studies",
    description:
      "Empowering Nations. Advancing the Kingdom. World-class theological education.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
