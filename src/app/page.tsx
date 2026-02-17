
"use client";
import { useEffect, useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl -translate-x-1/2 px-2">
      <nav className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-sm backdrop-blur justify-center">
        <div className="flex items-center gap-2 px-3">
          <span className="text-lg font-semibold">{'<aa>'}</span>
          <span className="h-6 w-px bg-slate-200" />
        </div>
        <a
          className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeSection === "home" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeSection === "about" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeSection === "projects" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeSection === "contact" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
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
    <section id="home" className="mx-auto w-full max-w-5xl px-2 pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        I’m available for new projects
      </div>

      {/* title */}
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-7xl break-words">
        Hi there, I am <span className="underline decoration-slate-200 decoration-8 underline-offset-8">Aqil Aiman</span>.
      </h1>

      {/* subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
        I'm a developer with a foot in both data science and web development. <br/>
        Half data scientist, half web architect. <br/>
        I can turn raw numbers into real impact and craft interfaces that people actually love to use.
      </p>

      {/* buttons */}
      <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center sm:justify-start">
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
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-1 py-8 sm:px-4 sm:py-14">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12">
        {/* Profile Image in 3D Card */}
        <button
          className="focus:outline-none mb-4 md:mb-0 w-full max-w-[220px] sm:max-w-xs"
          onClick={() => setShowModal(true)}
          tabIndex={0}
          aria-label="View profile photo larger"
        >
          <CardContainer className="inter-var cursor-pointer w-full">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full h-56 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-2xl p-0 border shadow-md transition-transform duration-300 group-hover/card:scale-110 group-hover/card:shadow-2xl">
              <CardItem translateZ="120" className="w-full h-full">
                <img
                  src="/images/aqil.jpg"
                  alt="Aqil Aiman"
                  className="w-full h-full object-cover rounded-2xl group-hover/card:shadow-2xl group-hover/card:scale-110 transition-transform duration-300"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </button>
        {/* Description */}
        <div className="flex-1 flex flex-col justify-center h-full text-center md:text-left w-full">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            I’m passionate about building products that blend data, design, and engineering. 
            My background in data science and web development lets me bridge the gap between 
            raw numbers and real user experiences.

            <br /><br />

            I’m currently pursuing Data Science & Computational Intelligence at IIUM, 
            with a strong interest in data engineering — building reliable data pipelines, 
            processing large datasets, and preparing data for analytics and machine learning. 
            I enjoy working on projects that challenge me to grow, and I’m always looking 
            for opportunities to collaborate and create meaningful impact.
          </p>
        </div>
      </div>
      {/* Modal for focused image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowModal(false)}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img
              src="/images/aqil.jpg"
              alt="Aqil Aiman Large"
              className="w-[350px] h-[500px] object-cover rounded-xl shadow-2xl border-2 border-white transition-transform duration-300"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-black text-lg font-bold shadow"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
