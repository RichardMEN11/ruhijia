import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-4">
        Wir freuen uns von Ihnen zu hören. Hier ist, wie Sie uns erreichen
        können...
      </p>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Mail className="mr-2 text-red-900" />
          <span>info@ruhija.org</span>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2 text-red-900" />
          <span>(123) 456-7890</span>
        </li>
        <li className="flex items-center">
          <MapPin className="mr-2 text-red-900" />
          <span>123 Hope Street, Anytown, ST 12345</span>
        </li>
      </ul>
    </div>
  );
}
