import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyUs from "./components/WhyUs";
import Resources from "./components/Resources";
import CTA from "./components/CTA";
import Locations from "./components/Locations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <Resources />
      <Locations />
      <CTA />
    </main>
  );
}