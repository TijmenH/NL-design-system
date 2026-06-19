import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Page, PageContent } from "@utrecht/component-library-react";
import { AppHeader } from "@/components/AppHeader";
import "@utrecht/component-library-css/dist/index.css";
import "./theme.css";

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
      <body className="nl-design-system-theme">
        <AppHeader />
        <main id="main-content">
          <Page>
            <PageContent>
              {children}
            </PageContent>
          </Page>
        </main>
      </body>
    </html>
  );
}
