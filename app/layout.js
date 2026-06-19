export const metadata = {
  title: "NL Design System",
  description: "Dashboard workspace"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
