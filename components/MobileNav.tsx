'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-blue-600 shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li className="w-full">
              <Link
                href="#"
                className="block py-2 px-4 text-center hover:bg-blue-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#"
                className="block py-2 px-4 text-center hover:bg-blue-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Programs
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#"
                className="block py-2 px-4 text-center hover:bg-blue-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Donate
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#"
                className="block py-2 px-4 text-center hover:bg-blue-700 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

