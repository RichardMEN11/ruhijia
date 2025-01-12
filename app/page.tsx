import Hero from '../components/Hero';
import Mission from '../components/Mission';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Mission />
    </main>
  );
}
