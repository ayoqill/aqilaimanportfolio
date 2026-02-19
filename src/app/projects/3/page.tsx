"use client";

import Link from "next/link";

export default function ProjectThree() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full">
          <img
            src="/images/3.avif"
            alt="Project 3 Preview"
            className="rounded-xl shadow-lg w-full h-[200px] object-cover ml-8"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Crypto Market Data Engineering Pipeline</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">Layered ETL & Analytics for Cryptocurrency Markets</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built an end-to-end data engineering pipeline to ingest cryptocurrency market data from a public API, transform it through structured layers, and generate analytical metrics using scheduled workflows. The system separates raw data storage from cleaned and derived datasets for reliability and reproducibility.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What It Does</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Pulls daily market data (e.g., prices, volumes) from the CoinGecko API</li>
            <li>Stores raw JSON in object storage (Bronze layer)</li>
            <li>Cleans and structures data into PostgreSQL (Silver layer)</li>
            <li>Generates daily metrics (returns, moving averages) in a Gold layer</li>
            <li>Managed and scheduled by orchestrator workflows</li>
            <li>Fully containerized for reproducible deployment</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Apache Airflow – workflow orchestration</li>
            <li>PostgreSQL – structured storage & analytics</li>
            <li>MinIO – object storage for raw data</li>
            <li>Docker – containerization</li>
            <li>CoinGecko API – real-time crypto data source</li>
            <li>Python – scripting and pipeline logic</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Why This Project Stands Out</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Implements layered data engineering architecture (Bronze/Silver/Gold)</li>
            <li>Demonstrates data orchestration with Airflow</li>
            <li>Works with object storage and relational databases</li>
            <li>Containerized setup for portability and reproducibility</li>
            <li>Solid example of real-world ETL pipeline design for analytics</li>
          </ul>
        </section>
        <hr className="my-8 border-zinc-700" />
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">← Home</Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">1</Link>
            <Link href="/projects/2" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">2</Link>
            <Link href="/projects/3" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">3</Link>
            <Link href="/projects/4" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">4</Link>
            <Link href="/projects/5" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">5</Link>
            <Link href="/projects/6" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">6</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
