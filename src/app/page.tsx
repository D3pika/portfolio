import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio /> 
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
