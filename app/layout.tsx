import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppHeader } from "@/components/AppHeader";
import "@utrecht/page-header-css/dist/index.css";

export const metadata: Metadata = {
  title: "NL Design System",
  description: "Dashboard workspace"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl">
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
