import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';

export default function Kontakt() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Kontakt</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
