"use client";

import Link from "next/link";

export default function ProjectFour() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="/images/4.avif"
            alt="Project 4 Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Traffic Flow Prediction</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">Using Linear Algebra & Machine Learning Techniques</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built an interpretable traffic forecasting system using linear algebra–based models to predict hourly vehicle volume on Interstate 94 (Twin Cities, Minnesota). The goal was to design mathematically sound, explainable models instead of black-box deep learning, making it suitable for Intelligent Transportation Systems (ITS), signal optimization, and infrastructure planning.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Time-series modeling</li>
            <li>Matrix-based optimization</li>
            <li>Feature engineering</li>
            <li>Model interpretability</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Problem Context</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Urban traffic congestion leads to longer travel times, higher fuel consumption, and increased air pollution.</li>
            <li>Accurate traffic prediction enables traffic control, route optimization, emergency response, and smarter infrastructure decisions.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Methodology</h3>
          <div className="mb-4">
            <h4 className="font-semibold">1️⃣ Least Squares Regression (LSR)</h4>
            <p className="text-zinc-300 mb-2">Modeled traffic volume using lag-based linear regression:</p>
            <pre className="bg-zinc-900 rounded p-2 text-sm overflow-x-auto mb-2">yₜ = B₀ + B₁yₜ₋₁ + B₂yₜ₋₂ + ϵ</pre>
            <ul className="list-disc pl-6 text-zinc-300 space-y-1">
              <li>Captures autocorrelation</li>
              <li>Interpretable coefficients</li>
              <li>Mathematically grounded</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">2️⃣ Discrete Dynamic System (DDS)</h4>
            <p className="text-zinc-300 mb-2">Modeled traffic as a recursive system:</p>
            <pre className="bg-zinc-900 rounded p-2 text-sm overflow-x-auto mb-2">xₜ₊₁ = A · xₜ</pre>
            <ul className="list-disc pl-6 text-zinc-300 space-y-1">
              <li>Simple scalar transition model</li>
              <li>Explains system behavior</li>
              <li>Good for conceptual understanding</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Feature Engineering</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Converted timestamp to datetime</li>
            <li>Extracted: hour, day_of_week, month</li>
            <li>One-hot encoded: holiday, weather_main</li>
            <li>Normalized: temperature, rain, cloud coverage</li>
            <li>Created lag features (lag_1, lag_2)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Python</li>
            <li>Pandas</li>
            <li>NumPy (matrix operations)</li>
            <li>Scikit-learn</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
          </ul>
          <div className="mt-4 text-zinc-400 text-sm">Core Skills: Linear algebra, optimization, time-series forecasting, feature engineering, model evaluation (MAE, RMSE, R²), end-to-end ML pipeline design.</div>
        </section>
        <hr className="my-8 border-zinc-700" />
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">← Home</Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">1</Link>
            <Link href="/projects/2" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">2</Link>
            <Link href="/projects/3" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">3</Link>
            <Link href="/projects/4" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">4</Link>
            <Link href="/projects/5" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">5</Link>
            <Link href="/projects/6" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">6</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
