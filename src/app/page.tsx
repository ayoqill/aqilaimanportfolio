"use client";
import { useEffect, useState, useRef } from "react";

function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
        <div className="flex items-center gap-2 px-3">
          <span className="text-lg font-semibold">nf.</span>
          <span className="h-6 w-px bg-slate-200" />
        </div>

        <a
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeSection === "home" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeSection === "about" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeSection === "projects" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeSection === "contact" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pt-40 pb-24">
      {/* badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        I’m available for new projects
      </div>

      {/* title */}
      <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
        Hi there, I am <span className="underline decoration-slate-200 decoration-8 underline-offset-8">Aqil Aiman</span>.
      </h1>

      {/* subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
        I'm a developer with a foot in both data science and web development. <br/>
        Half data scientist, half web architect <br/>
        I can turn raw numbers into real impact and craft interfaces that people actually love to use.
      </p>

      {/* buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          Work with Me
        </a>
        <a
          href="/resume.pdf"
          className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
        >
          View Resume
        </a>
          {/* Smooth scroll to About section */}
          <a
            href="#about"
            className="rounded-full px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Learn more
          </a>
      </div>
    </section>
  );
}


function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];
    const main = mainRef.current;
    if (!main) return;
    const handleScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && main) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          const scroll = main.scrollTop;
          if (scroll >= sectionTop - sectionHeight / 2 && scroll < sectionTop + sectionHeight / 2) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    main.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar activeSection={activeSection} />
      <main ref={mainRef} className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section id="home" className="h-screen snap-start flex items-center justify-center">
          <Hero />
        </section>
        <section id="about" className="h-screen snap-start flex items-center justify-center">
          <About />
        </section>
        {/*
        <section id="projects" className="h-screen snap-start flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="h-screen snap-start flex items-center justify-center">
          <Contact />
        </section>
        */}
      </main>
    </div>
  );
}

export default Page;

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-32">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">About Me</h2>
      <p className="text-lg text-slate-700 leading-relaxed">
        I’m passionate about building products that blend data, design, and engineering. My background in data science and web development lets me bridge the gap between raw numbers and real user experiences. I love working on projects that challenge me to learn and grow, and I’m always looking for new opportunities to collaborate and create.
      </p>
    </section>
  );
}
