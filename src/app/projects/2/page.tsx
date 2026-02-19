"use client";

import Link from "next/link";

export default function ProjectTwo() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="/images/2.avif"
            alt="Project 2 Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Spotify Azure Project</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">Cloud Analytics & Visualization for Spotify Data</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built a cloud-powered analytics and visualization system for Spotify data using Microsoft Azure services. This project pulls user playlists and track features from the Spotify API, processes and stores them in the cloud, then delivers insights via analytics dashboards. It demonstrates both data engineering and cloud infrastructure skills.
            <a href="https://github.com/ayoqill/SpotifyAzureProject" target="_blank" rel="noopener noreferrer" className="text-zinc-400 underline ml-2">GitHub Repo</a>
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What It Does</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Authenticates with Spotify API to extract playlist and track data</li>
            <li>Stores raw data in cloud storage for durability</li>
            <li>Loads data into structured cloud databases for querying</li>
            <li>Generates insights on songs, artists, and user behavior</li>
            <li>Deployed using Azure services for real-world cloud workflows</li>
          </ul>
          <p className="mt-4 text-zinc-400 text-sm">
            Highlights modern cloud-based data solutions and scalable analytics.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Microsoft Azure – cloud platform services
              <ul className="list-disc pl-6 text-zinc-400 space-y-1">
                <li>Azure Storage (blobs/tables)</li>
                <li>Azure SQL or equivalent</li>
                <li>Azure Functions / Logic Apps (or similar)</li>
              </ul>
            </li>
            <li>Spotify API – source of music metadata and user playlist info</li>
            <li>Python – API calls, ETL scripts</li>
            <li>Dash / Streamlit (or similar) – visualization dashboard</li>
            <li>Git & GitHub – version control</li>
          </ul>
        </section>
        <hr className="my-8 border-zinc-700" />
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">← Home</Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">1</Link>
            <Link href="/projects/2" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">2</Link>
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
