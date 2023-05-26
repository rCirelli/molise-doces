import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} bg-offwhite`}>
      <body>{children}</body>
    </html>
  );
}
