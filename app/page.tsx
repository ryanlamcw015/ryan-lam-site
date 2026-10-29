import Nav, { Ambient } from "@/components/Nav";
import { About, Contact, Education, Experience, Footer, Hero, Projects, Skills, Stats } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
