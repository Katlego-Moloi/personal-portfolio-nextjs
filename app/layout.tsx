import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  
  title:
    "Katlego Moloi | Software Developer & Data Enthusiast | BSc IT Graduate",
  description:
    "BSc Information Technology graduate double majoring in Computer Science and Business Management. Software developer passionate about data, full-stack development, and building scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} antialiased font-sans`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}


