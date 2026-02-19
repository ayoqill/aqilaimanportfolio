"use client";

import Link from "next/link";

export default function ProjectSix() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="/images/6.avif"
            alt="Project 6 Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Malaysia Air Pollution Index Prediction Using Deep Learning</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">Forecasting Air Quality with Multi-Architecture Deep Learning</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built a deep learning forecasting system to predict air pollution levels in Malaysia using 6 years of monthly pollutant data (2017–2022). The model forecasts key pollutants (CO, NO₂, O₃, SO₂, PM10, PM2.5) to support early warning systems and public health planning. Focuses on time-series modeling, model comparison, and performance optimization.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What I Did</h3>
          <div className="mb-4">
            <h4 className="font-semibold">1️⃣ Time-Series Engineering</h4>
            <ul className="list-disc pl-6 text-zinc-300 space-y-1">
              <li>Converted raw data into supervised learning format using 6-step sliding window lookback</li>
              <li>Handled missing values using median imputation by pollutant</li>
              <li>Applied MinMaxScaler normalization to standardize pollutant scales</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">2️⃣ Advanced EDA & Feature Understanding</h4>
            <ul className="list-disc pl-6 text-zinc-300 space-y-1">
              <li>Identified seasonality trends (e.g., PM peaks in winter, O₃ peaks in summer)</li>
              <li>Used Pearson correlation matrix to detect strong relationships (e.g., PM10 ↔ PM2.5)</li>
              <li>Applied Random Forest feature importance to identify key predictors</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">3️⃣ Deep Learning Model Comparison</h4>
            <ul className="list-disc pl-6 text-zinc-300 space-y-1">
              <li>Developed and compared 4 architectures: LSTM, MLP, 1D CNN, Hybrid Model</li>
              <li>Applied Bayesian Optimization (Keras Tuner) for hyperparameter tuning</li>
              <li>Evaluated with MSE, MAE, RMSE, R² Score</li>
              <li>LSTM achieved the most consistent performance across pollutants</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tools & Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Python</li>
            <li>TensorFlow / Keras</li>
            <li>Keras Tuner (Bayesian Optimization)</li>
            <li>Scikit-learn</li>
            <li>Pandas / NumPy</li>
            <li>Matplotlib / Seaborn</li>
            <li>Random Forest (feature importance)</li>
            <li>Time-series sliding window engineering</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Impact-Oriented Framing</h3>
          <blockquote className="border-l-4 border-zinc-600 pl-4 italic text-zinc-300 mb-4">
            Designed and optimized a multi-architecture deep learning system for air quality forecasting, achieving improved temporal prediction accuracy using LSTM with Bayesian hyperparameter tuning.
          </blockquote>
          <div className="mb-2 text-zinc-300">Highlight Skills:</div>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Time-series forecasting</li>
            <li>Model benchmarking & comparison</li>
            <li>Hyperparameter optimization</li>
            <li>Feature engineering</li>
            <li>API-based model deployment</li>
            <li>End-to-end ML pipeline</li>
          </ul>
        </section>
        
        <hr className="my-8 border-zinc-700" />
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="text-zinc-400 hover:text-white px-4 py-2 rounded transition">← Home</Link>
          <div className="flex gap-2">
            <Link href="/projects/1" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">1</Link>
            <Link href="/projects/2" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">2</Link>
            <Link href="/projects/3" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">3</Link>
            <Link href="/projects/4" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">4</Link>
            <Link href="/projects/5" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">5</Link>
            <Link href="/projects/6" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">6</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
