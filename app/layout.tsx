import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://francisgianj.github.io"),
  title: {
    default: "Francis Juson",
    template: "%s | Francis Juson",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    
  },
  openGraph: {
    title: "Francis Juson",
    url: "https://francisgianj.github.io",
    siteName: "Francis Juson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased tracking-tight`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          disableTransitionOnChange
        >
          <div className="min-h-screen pt-0 md:pt-8 p-8 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
