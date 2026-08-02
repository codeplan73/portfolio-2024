import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <main>
        <section className="px-6" id="hero">
          <Hero />
        </section>

        <section
          className="px-6 py-8 md:py-20 md:px-24 bg-slate-900"
          id="about"
        >
          <About />
        </section>

        <section
          className="px-6 py-8 bg-slate-950 md:py-20 md:px-24"
          id="skills"
        >
          <Skills />
        </section>

        <section
          className="px-6 py-8 bg-slate-900 md:py-20 md:px-24"
          id="projects"
        >
          <Project />
        </section>

        <section
          className="px-6 py-8 bg-slate-950 md:py-20 md:px-24"
          id="testimonials"
        >
          <Testimonial />
        </section>

        <section
          className="px-6 py-8 bg-slate-900 md:py-20 md:px-24"
          id="contact"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
