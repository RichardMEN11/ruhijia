import MissionStatement from '../../components/MissionStatement';
import OurStory from '../../components/OurStory';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Über Ruhija</h1>
        <MissionStatement />
        <OurStory />
      </div>
    </main>
  );
}
