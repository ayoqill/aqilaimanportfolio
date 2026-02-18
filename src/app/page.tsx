"use client";
import { useEffect, useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="mx-auto flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-md backdrop-blur max-w-fit">
        <span className="text-lg font-semibold px-4">{'<aa>'}</span>
        <span className="h-6 w-px bg-slate-200 mx-2" />
        <div className="flex items-center gap-1">
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
        </div>
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

function About() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* About 1: Image and Description */}
      <section id="about" className="h-screen snap-start flex items-center justify-center">
        <div className="mx-auto w-full max-w-5xl px-1 py-8 sm:px-4 sm:py-14 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12">
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

      {/* About 2: Education (left) & Experience (right) */}
      <section className="h-screen snap-start flex items-center justify-center bg-transparent">
        <div className="mx-auto w-full max-w-5xl px-1 py-8 sm:px-4 sm:py-14 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Education Timeline + Certifications (scrollable if long) */}
          <div className="md:w-1/2 w-full flex flex-col gap-8 max-h-[80vh] overflow-y-auto pr-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <ol className="relative border-l border-x-slate-400 ml-3">
                <li className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-pink-600">
                    <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl transition-shadow duration-200 hover:ring-2 hover:ring-slate-300">
                    <h4 className="font-semibold text-lg"> Foundation in Engineering and Computer Science</h4>
                    <div className="text-slate-500 text-sm mb-1">Centre for Foundation Studies IIUM (CFS IIUM)</div>
                    <div className="text-xs text-slate-400">August 2021 - August 2022</div>
                  </div>
                </li>
                <li className="ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-pink-600">
                    <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl transition-shadow duration-200 hover:ring-2 hover:ring-slate-300">
                    <h4 className="font-semibold text-lg">Bachelor of Computer Science (Hons.)</h4>
                    <div className="text-slate-500 text-sm mb-1">Data Science and Computational Intelligence | IIUM</div>
                    <div className="text-xs text-slate-400">October 2022 - Present</div>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <ol className="relative border-l border-x-slate-400 ml-3">
                <li className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl flex items-center gap-4 transition-shadow duration-200 hover:ring-2 hover:ring-emerald-200">
                    <img src="/images/comptia.png" alt="CompTIA Logo" className="w-10 h-10 object-contain rounded-md" />
                    <span className="text-slate-700 font-semibold text-base">CompTIA Data+</span>
                  </div>
                </li>
                {/*
                <li className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl flex items-center gap-4 transition-shadow duration-200 hover:ring-2 hover:ring-slate-300">
                    <span className="inline-block bg-slate-100 rounded-lg px-3 py-2 text-slate-700 font-semibold text-sm">AWS Certified Data Analytics</span>
                  </div>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl flex items-center gap-4 transition-shadow duration-200 hover:ring-2 hover:ring-slate-300">
                    <span className="inline-block bg-slate-100 rounded-lg px-3 py-2 text-slate-700 font-semibold text-sm">Google Data Engineer</span>
                  </div>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl flex items-center gap-4 transition-shadow duration-200 hover:ring-2 hover:ring-slate-300">
                    <span className="inline-block bg-slate-100 rounded-lg px-3 py-2 text-slate-700 font-semibold text-sm">Databricks Certified Associate</span>
                  </div>
                </li>
                */}
              </ol>
            </div>
          </div>
          {/* Experience Timeline (scrollable if long) */}
          <div className="md:w-1/2 w-full max-h-[80vh] overflow-y-auto pr-2">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <ol className="relative border-l border-x-slate-400 ml-3">
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-blue-500">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                </span>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl transition-shadow duration-200 hover:ring-2 hover:ring-blue-200">
                  <h4 className="font-semibold text-lg">Seeking 6-Month Internship (June/July Start)</h4>
                  <div className="text-slate-500 text-sm mb-1">Open to Data Engineering, Data Analyst, Data Scientist & Related Roles</div>
                  <div className="text-xs text-slate-400">Available: June/July 2026 - Dec 2026</div>
                  <div className="text-slate-600 text-sm mt-2">
                    Passionate about building robust data pipelines and delivering actionable insights from complex datasets. Eager to contribute to teams focused on data engineering, analytics, or data science. My interests include ETL development, data integration, automation, and scalable data infrastructure. Ready to learn, adapt, and add value in any data-driven environment.
                  </div>
                </div>
              </li>
              {/*
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                </span>
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm">
                  <h4 className="font-semibold text-lg">Junior Data Analyst</h4>
                  <div className="text-slate-500 text-sm mb-1">Company Name</div>
                  <div className="text-xs text-slate-400">Jun 2026 - Dec 2027</div>
                  <div className="text-slate-600 text-sm mt-2">Promoted to Junior Data Analyst, responsible for dashboarding and reporting.</div>
                </div>
              </li>
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                </span>
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm">
                  <h4 className="font-semibold text-lg">Data Scientist</h4>
                  <div className="text-slate-500 text-sm mb-1">Company Name</div>
                  <div className="text-xs text-slate-400">Jan 2028 - Present</div>
                  <div className="text-slate-600 text-sm mt-2">Lead data science projects, mentored junior team members, and deployed ML models to production.</div>
                </div>
              </li>
              */}
            </ol>
          </div>
        </div>
      </section>

      {/* About 3: Tech Stack (own snapshot, no cert) */}
      <section className="h-screen snap-start flex items-center justify-center bg-transparent">
        <div className="mx-auto w-full max-w-5xl px-1 py-8 sm:px-4 sm:py-14 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Tech Stack */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-2">
              {/* Example tech stack, edit as needed */}
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">React</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">TypeScript</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">TailwindCSS</span>
              {/* Add/remove as needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Treat both About 1 and About 2 as a single 'about' section for highlight
    const sectionIds = ["home", "about", "projects", "contact"];
    const main = mainRef.current;
    if (!main) return;
    const handleScroll = () => {
      let current = "home";
      const scroll = main.scrollTop;
      const aboutSection = document.getElementById("about");
      const about2Section = aboutSection?.nextElementSibling;
      const aboutStart = aboutSection?.offsetTop ?? 0;
      const aboutEnd = about2Section ? (about2Section as HTMLElement).offsetTop + (about2Section as HTMLElement).offsetHeight : aboutStart;
      if (aboutSection && about2Section && scroll >= aboutStart - 100 && scroll < aboutEnd - 100) {
        current = "about";
      } else {
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && main) {
            const sectionTop = el.offsetTop;
            const sectionHeight = el.offsetHeight;
            if (scroll >= sectionTop - sectionHeight / 2 && scroll < sectionTop + sectionHeight / 2) {
              current = id;
              break;
            }
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
        <About />
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
