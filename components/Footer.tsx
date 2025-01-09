export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Hope Street</p>
            <p>Anytown, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@hopefoundation.org</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Volunteer</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p>Subscribe to our newsletter for updates on our work and ways to get involved.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-gray-800"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Hope Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

