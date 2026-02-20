"use client";
import { useEffect, useState, useRef } from "react";
import ContactForm from "./ContactForm";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Projects from "./Projects";

function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2 w-[calc(100%-24px)] max-w-3xl">
      <nav className="flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-md backdrop-blur w-full">
        <span className="text-lg font-semibold px-3 shrink-0">{'<aa>'}</span>
        <span className="h-6 w-px bg-slate-200 mx-2 shrink-0" />
        {/* mobile: can scroll instead of overflow */}
        <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] scrollbar-hide w-full">
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
        <span className="sm:whitespace-nowrap break-words">
          I can turn raw numbers into real impact and craft interfaces that people actually love to use.
        </span>
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
          href="/Aqil%20Aiman%20Resume.pdf"
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
      <section id="about" className="min-h-[100dvh] md:h-screen md:snap-start flex items-center justify-center">
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
      <section id="education" className="min-h-[100dvh] md:h-screen md:snap-start flex items-center justify-center bg-transparent">
        <div className="mx-auto w-full max-w-5xl px-1 py-8 sm:px-4 sm:py-14 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Education Timeline + Certifications (scrollable if long) */}
          <div className="md:w-1/2 w-full flex flex-col gap-8 md:max-h-[80vh] md:overflow-y-auto md:pr-2">
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
          <div className="md:w-1/2 w-full md:max-h-[80vh] md:overflow-y-auto md:pr-2">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <ol className="relative border-l border-x-slate-400 ml-3">
              <li className="mb-8 ml-6 group">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-blue-500">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                </span>
                  <div className="rounded-2xl border-4 border-yellow-400 bg-slate-50 p-4 shadow-xl transition-shadow duration-200 border-pulse group-hover:ring-2 group-hover:ring-blue-200 group-hover:shadow-2xl">
                  <style jsx>{`
                    .border-pulse {
                      animation: borderPulse 2.5s infinite;
                    }
                    @keyframes borderPulse {
                      0% { box-shadow: 0 0 0 0 rgba(255, 221, 51, 0.7); }
                      50% { box-shadow: 0 0 0 6px rgba(255, 221, 51, 0.2); }
                      100% { box-shadow: 0 0 0 0 rgba(255, 221, 51, 0.7); }
                    }
                  `}</style>
                  <h4 className="font-semibold text-lg">Seeking 6-Month Internship (June/July Start)</h4>
                  <div className="text-slate-500 text-sm mb-1">Open to Data Engineering, Data Analyst, Data Scientist & Related Roles</div>
                  <div className="text-xs text-slate-400">Available: June/July 2026 - Dec 2026</div>
                  <div className="text-slate-600 text-sm mt-2">
                    Passionate about building robust data pipelines and delivering actionable insights from complex datasets. Eager to contribute to teams focused on data engineering, analytics, or data science. My interests include ETL development, data integration, automation, and scalable data infrastructure. Ready to learn, adapt and add value in any data-driven environment.
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

      {/* About 3: Tech Stack (modern minimalist, no card) */}
      <section id="techstack" className="min-h-[100dvh] md:h-screen md:snap-start flex items-center justify-center relative w-full">
        {/* Only grid and noise backgrounds, no blue gradient */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
        </div>
        {/* Minimalist container for content, with max-h and vertical scroll for grid */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-2 md:px-4 flex flex-col items-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-4 md:p-8 flex flex-col items-center w-full h-[80vh] max-h-[80vh] overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 md:mb-10 text-center">Tech Stack</h3>
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full overflow-y-auto max-h-[60vh] pr-1 sm:pr-2" style={{ WebkitOverflowScrolling: "touch" }}>
                {/* Frontend */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Frontend</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" label="React" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" label="Next.js" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" label="TypeScript" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" label="JavaScript" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" label="HTML" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" label="CSS" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" label="Streamlit" />
                  </div>
                </div>
                {/* Backend */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Backend</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" label="Node.js" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" label="FastAPI" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" label="Flask" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" label="Java" />
                    <TechIcon src="https://cdn.brandfetch.io/id8EAnvAAb/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1770040504066" label="Solidity" />
                    {/* Removed JWT */}
                  </div>
                </div>
                {/* Data Engineering */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Data Engineering</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" label="Apache Airflow" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original-wordmark.svg" label="Apache Spark" />
                    <TechIcon src="https://cdn.brandfetch.io/idmg-NaphI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1766731505202" label="MinIO" />
                    <TechIcon src="https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668081624532" label="Databricks" />
                  </div>
                </div>
                {/* Databases */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Databases</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" label="Microsoft SQL Server" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" label="MySQL" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" label="Postgres" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" label="Supabase" />
                  </div>
                </div>
                {/* Data Science / ML */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Data Sc / ML</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" label="Python" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" label="Pandas" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" label="NumPy" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" label="Matplotlib" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" label="Plotly" />
                    <TechIcon src="https://cdn.brandfetch.io/idW3VhiylC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1768218428470" label="Scikit-learn" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" label="TensorFlow" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" label="PyTorch" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" label="Keras" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" label="OpenCV" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" label="R" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" label="C++" />
                  </div>
                </div>
                {/* Cloud / Platform */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4">Cloud / Platform</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" label="Microsoft Azure" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" label="Vercel" />
                    {/* Removed AWS */}
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" label="Cloudflare" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" label="Google Cloud" />
                  </div>
                </div>
                {/* Tools */}
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3 md:mb-4">Tools</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" label="Git" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" label="GitHub" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" label="Docker" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" label="npm" />
                    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" label="Bash" />
                    <TechIcon src="https://cdn.brandfetch.io/idVCtIagXj/w/820/h/820/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764925990591" label="Power BI" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// TechIcon component for micro-interactions
function TechIcon({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 shadow-sm border border-slate-100 max-w-full min-w-0 w-full sm:w-auto transition-all duration-200 hover:shadow-lg sm:hover:-translate-y-1 sm:hover:rotate-3 hover:ring-2 hover:ring-blue-100">
      <img src={src} alt={label} className="w-7 h-7 shrink-0" />
      <span className="text-sm font-medium text-slate-700 truncate min-w-0">{label}</span>
    </div>
  );
}

function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const home = document.getElementById("home");
    const about1 = document.getElementById("about");
    const about2 = document.getElementById("education");
    const about3 = document.getElementById("techstack");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const id = (visible.target as HTMLElement).id;
        if (id === "home") {
          setActiveSection("home");
        } else if (id === "about" || id === "education" || id === "techstack") {
          setActiveSection("about");
        } else {
          setActiveSection(id);
        }
      },
      {
        root: main,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px",
      }
    );

    [home, about1, about2, about3, projects, contact].forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar activeSection={activeSection} />
      <main
        ref={mainRef}
        className="h-[100dvh] overflow-y-auto scroll-smooth md:snap-y md:snap-proximity"
      >
        <section
          id="home"
          className="min-h-[100dvh] md:h-screen md:snap-start flex items-center justify-center pt-24 md:pt-0"
        >
          <Hero />
        </section>
        <About />
        <Projects containerRef={mainRef} />
        <section
          id="contact"
          className="min-h-[100dvh] md:snap-start pt-24 md:pt-32 flex items-center justify-center bg-black"
        >
          <div className="w-full max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
            {/* Left: Contact Form */}
            <div className="flex-1 w-full max-w-xl bg-zinc-900 p-10 rounded-2xl shadow-2xl border border-zinc-800">
              <h2 className="text-5xl font-extrabold mb-3 text-white tracking-tight">Work with Me</h2>
              <p className="mb-10 text-lg text-zinc-300">Have an idea, a question, or just want to say hi? Drop me a message, I’d love to hear from you.</p>
              <ContactForm />
            </div>
            {/* Right: Social/Email Buttons */}
            <div className="flex-1 w-full max-w-xl flex flex-col items-center justify-center">
              <div className="flex items-center w-full mb-8">
                <span className="flex-1 h-px bg-zinc-700" />
                <span className="mx-4 text-zinc-400 font-semibold">OR</span>
                <span className="flex-1 h-px bg-zinc-700" />
              </div>
              <h3 className="text-3xl font-extrabold text-center mb-8 tracking-tight text-white">You can also reach me via…</h3>
              <div className="flex flex-col gap-6 w-full">
                <a href="mailto:aqilaiman058@gmail.com" className="flex items-center gap-5 bg-zinc-900 p-7 rounded-2xl shadow-xl border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 group">
                  <span className="bg-zinc-800 p-4 rounded-full group-hover:bg-zinc-700 transition-colors"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="font-semibold text-xl text-white">Email</span>
                  <span className="ml-auto text-zinc-400 group-hover:text-white transition-colors"><svg width="22" height="22" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </a>
                <a href="https://linkedin.com/in/aqilaiman260" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-zinc-900 p-7 rounded-2xl shadow-xl border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 group">
                  <span className="bg-zinc-800 p-4 rounded-full group-hover:bg-zinc-700 transition-colors"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="font-semibold text-xl text-white">LinkedIn</span>
                  <span className="ml-auto text-zinc-400 group-hover:text-white transition-colors"><svg width="22" height="22" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </a>
                <a href="https://github.com/ayoqill" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-zinc-900 p-7 rounded-2xl shadow-xl border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 group">
                  <span className="bg-zinc-800 p-4 rounded-full group-hover:bg-zinc-700 transition-colors"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="font-semibold text-xl text-white">GitHub</span>
                  <span className="ml-auto text-zinc-400 group-hover:text-white transition-colors"><svg width="22" height="22" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
