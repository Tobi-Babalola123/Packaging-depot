import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
// import Coverage from "@/components/sections/Coverage";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
        {/* <Coverage /> */}
        <About />
        <Testimonials />
        <Industries />
        <Process />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
