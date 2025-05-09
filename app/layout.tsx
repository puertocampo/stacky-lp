import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import GTM from "@/components/analytics/gtm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stacky - かっちり開発、まったり作業",
  description: "ブラウザをピン留めして、タスクを視界から逃さない。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <GTM />
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
