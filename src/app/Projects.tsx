"use client";
import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Project = {
  title: string;
  img: string;
};

const row1: Project[] = [
  { title: "Project One", img: "/projects/p1.png" },
  { title: "Project Two", img: "/projects/p2.png" },
  { title: "Project Three", img: "/projects/p3.png" },
];

const row2: Project[] = [
  { title: "Project Four", img: "/projects/p4.png" },
  { title: "Project Five", img: "/projects/p5.png" },
  { title: "Project Six", img: "/projects/p6.png" },
];

export default function Projects({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>;
}) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // adjust movement intensity here
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="projects"
      className="h-screen snap-start flex items-center justify-center"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-3 text-slate-600">
            A snapshot of selected work.
          </p>
        </div>

        {/* Edge fade mask for premium look */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] space-y-8">
          {/* Row 1 */}
          <motion.div
            style={{ x: xLeft }}
            className="flex justify-center gap-6"
          >
            {row1.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            style={{ x: xRight }}
            className="flex justify-center gap-6"
          >
            {row2.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, img }: Project) {
  return (
    <div className="group w-[360px] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">View project →</p>
      </div>
    </div>
  );
}
