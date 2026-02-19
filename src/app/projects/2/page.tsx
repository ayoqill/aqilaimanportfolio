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
            alt="Spotify Azure Project Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Spotify Azure Data Engineering Pipeline
        </h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">
          Medallion Architecture + Power BI Analytics
        </h2>

        <hr className="my-6 border-zinc-700" />

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built an end-to-end Spotify data pipeline using <span className="text-white">PySpark on Azure Databricks</span>.
            It follows a <span className="text-white">Bronze – Silver – Gold (Medallion)</span> architecture: raw ingestion,
            cleaned Delta tables, and analytics-ready models. The final datasets power an interactive{" "}
            <span className="text-white">Power BI dashboard</span> for insights on tracks, artists, and listening trends.
            <br />
            <div className="mt-4 space-y-1">
              <div>
                - <a
                  href="https://github.com/ayoqill/SpotifyAzureProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 underline hover:text-white transition"
                >
                  Data Pipeline Repo
                </a>
              </div>
              <div>
                - <a
                  href="https://github.com/ayoqill/Spotify-PowerBI-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 underline hover:text-white transition"
                >
                  Power BI Repo
                </a>
              </div>
            </div>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What I Built</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Ingested Spotify data into the <span className="text-white">Bronze</span> layer (raw storage)</li>
            <li>Handled incremental ingestion using <span className="text-white">Auto Loader</span></li>
            <li>Cleaned, deduplicated, and merged data in the <span className="text-white">Silver</span> layer with <span className="text-white">Delta Lake</span></li>
            <li>Modeled a <span className="text-white">star schema</span> (fact + dimension tables) in the <span className="text-white">Gold</span> layer</li>
            <li>Supported backfilling, schema changes, and CDC-style updates (no full reload)</li>
            <li>Built <span className="text-white">Power BI dashboards</span> for analytics and visualization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Azure Databricks (PySpark)</li>
            <li>Delta Lake</li>
            <li>Azure Data Lake Storage</li>
            <li>Spotify API</li>
            <li>Power BI</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <hr className="my-8 border-zinc-700" />

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">
            ← Home
          </Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">
              1
            </Link>
            <Link href="/projects/2" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">
              2
            </Link>
            <Link href="/projects/3" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">
              3
            </Link>
            <Link href="/projects/4" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">
              4
            </Link>
            <Link href="/projects/5" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">
              5
            </Link>
            <Link href="/projects/6" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">
              6
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}