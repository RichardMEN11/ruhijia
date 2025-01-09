import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Mission />
      <Footer />
    </main>
  );
}
