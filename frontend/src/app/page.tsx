import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';
import Hero from '@/components/landingPage/Hero';
import Testimonials from '@/components/landingPage/Testimonial';
import { Features } from '@/components/landingPage/Features';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
