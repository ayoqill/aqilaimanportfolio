function Navbar() {
  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
        <div className="flex items-center gap-2 px-3">
          <span className="text-lg font-semibold">nf.</span>
          <span className="h-6 w-px bg-slate-200" />
        </div>

        <a className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900" href="#home">
          Home
        </a>
        <a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900" href="#about">
          About
        </a>
        <a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900" href="#projects">
          Projects
        </a>
        <a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900" href="#contact">
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
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
    </div>
  );
}
