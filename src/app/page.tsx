import {
  HeroSection,
  FeaturedSection,
  WhyChooseUs,
  Testimonials,
  WebinarsSection,
  Instructors,
} from "@/components/";

export default function Home() {
  return (
    <div className=" w-full bg-black/90 antialiased">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonials />
      <WebinarsSection />
      <Instructors />
    </div>
  );
}
