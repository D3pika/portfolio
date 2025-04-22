import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero2 from "@/components/hero2";
import Certifications from "@/components/certification";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2/>
      <About />
      <Skills />
      <Portfolio /> 
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
