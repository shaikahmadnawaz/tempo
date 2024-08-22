import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tempo",
  description: "Orchestrate Your Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={gaegu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
