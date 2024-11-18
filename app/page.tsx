import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="" id="hero">
          <Hero />
        </section>

        <section className="px-6 md:px-24 bg-slate-100" id="about">
          <About />
        </section>
      </main>
    </div>
  );
}
