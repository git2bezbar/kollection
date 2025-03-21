import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kollection | Personal vinyl and CD collection',
  description: 'A personal collection of vinyl and CDs',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
