import Hero from '@/components/home/Hero';
import FeatureGrid from '@/components/home/FeatureGrid';
import MissionStatement from '@/components/home/MissionStatement';
import Stats from '@/components/home/Stats';
import OurStory from '@/components/home/OurStory';
import Programs from '@/components/home/Programs';
import VerseSection from '@/components/home/VerseSection';
import CTASection from '@/components/home/CTASection';
import PhotoMarquee from '@/components/home/PhotoMarquee';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <MissionStatement />
      <Stats />
      <OurStory />
      <PhotoMarquee />
      <Programs />
      <VerseSection />
      <CTASection />
    </>
  );
}