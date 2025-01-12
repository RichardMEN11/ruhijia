import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ruhija - Bildung für die Zukunft',
  description:
    'Ruhija ist eine gemeinnützige Organisation, die sich für die Verbesserung der Bildung in Uganda einsetzt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-20 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
