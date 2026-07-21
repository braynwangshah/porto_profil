import type { Metadata } from "next";
import "./globals.css";
import Providers from "./brayn/providers/theme-provider";
import WelcomeIntro from "./components/welcome-intro";

export const metadata: Metadata = {
  title: "CV Digital",
  description: "Portfolio Brayn Richard Wangshah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <WelcomeIntro />
          {children}
        </Providers>
      </body>
    </html>
  );
}
