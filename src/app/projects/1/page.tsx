"use client";

import Link from "next/link";

export default function ProjectOne() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="/images/1.jpg" // Update this path as needed
            alt="Project 1 Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Deep Learning–Based Carbon Credit Estimation</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">From Multispectral Satellite Imagery (Mangrove Carbon Mapper)</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p className="mb-4 text-zinc-300">
            End-to-end deep learning system for automatic mangrove detection and carbon stock estimation from multispectral satellite imagery. Replaces manual GIS workflows with an AI pipeline:
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Pixel-level mangrove segmentation</li>
            <li>Area calculation from satellite images</li>
            <li>Carbon stock & CO₂ equivalent estimation</li>
          </ul>
          <p className="mt-4 text-zinc-400 text-sm">
            Supports environmental monitoring and carbon credit verification (SDG 13 & SDG 15).
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Core Contributions</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Automated mangrove detection using deep learning</li>
            <li>Segmentation to measurable carbon stock values</li>
            <li>Full pipeline: image → mask → area → carbon estimate</li>
            <li>Prototype web interface for visualization</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">AI & Modeling</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>U-Net++ segmentation</li>
            <li>SAM2 for mask generation</li>
            <li>Pixel-level classification</li>
            <li>Image preprocessing & normalization</li>
            <li>Area-based carbon estimation</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <div className="mb-2 text-zinc-300">Deep Learning</div>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>PyTorch</li>
            <li>U-Net++</li>
            <li>SAM2</li>
            <li>OpenCV</li>
          </ul>
          <div className="mt-4 mb-2 text-zinc-300">Geospatial & Image Processing</div>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Multispectral satellite imagery</li>
            <li>Image preprocessing pipeline</li>
            <li>Area computation from pixel masks</li>
          </ul>
          <div className="mt-4 mb-2 text-zinc-300">Backend / System</div>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Python</li>
            <li>End-to-end model pipeline</li>
          </ul>
        </section>
        <hr className="my-8 border-zinc-700" />
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">← Home</Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">1</Link>
            <Link href="/projects/2" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">2</Link>
            <Link href="/projects/3" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">3</Link>
            <Link href="/projects/4" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">4</Link>
            <Link href="/projects/5" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">5</Link>
            <Link href="/projects/6" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">6</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
