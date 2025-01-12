import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="w-full bg-red-900 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ruhija
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/ueber" className="hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/projekte" className="hover:underline">
                Projekte
              </Link>
            </li>
            <li>
              <Link href="/unterstuetzen" className="hover:underline">
                Unterstützen
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
