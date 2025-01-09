import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Hope Foundation
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Donate
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
