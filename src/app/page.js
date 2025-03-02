import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import ContactUs from "../components/Contact/ContactUs";

export default function Home() {
  return (
      <main>
        <Banner />
        <About />
        <Services />
        <Skills />
        <Projects />
        <ContactUs />
      </main> 
  );
}

