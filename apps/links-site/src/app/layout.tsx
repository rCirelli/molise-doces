import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-offwhite">
      <body>{children}</body>
    </html>
  );
}
