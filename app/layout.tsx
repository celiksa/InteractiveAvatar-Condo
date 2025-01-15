import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import NavBar from "@/components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "EMAAR Interactive Avatar",
    template: `%s - EMAAR Interactive Avatar`,
  },
  icons: {
    icon: "/emaar_logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} font-sans`}
    >
      <head />
      <body className={clsx("min-h-screen antialiased bg-[url('/emaar_mall.jpeg')]  bg-contain bg-center bg-no-repeat bg-fixed")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="relative flex flex-col h-screen w-screen">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
