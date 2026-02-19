"use client";

import Link from "next/link";

export default function ProjectFive() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Project Image */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="/images/5.avif"
            alt="Project 5 Preview"
            className="rounded-xl shadow-lg max-h-64 object-cover w-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Movie Review Sentiment Analysis</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-6 text-zinc-400">Using Machine Learning & Transformer Models</h2>
        <hr className="my-6 border-zinc-700" />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p className="mb-4 text-zinc-300">
            Built a sentiment classification system to automatically classify movie reviews as <b>Positive or Negative</b>. The project compares traditional machine learning with modern transformer models to evaluate how contextual language understanding improves sentiment detection.
          </p>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Text classification</li>
            <li>NLP preprocessing</li>
            <li>Model benchmarking</li>
            <li>Transformer fine-tuning</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Models Implemented</h3>
          <ol className="list-decimal pl-6 text-zinc-300 space-y-1">
            <li><b>Baseline Model</b>
              <ul className="list-disc pl-6 text-zinc-400">
                <li>TF-IDF (unigrams + bigrams)</li>
                <li>Logistic Regression</li>
              </ul>
            </li>
            <li><b>Pre-trained DistilBERT</b>
              <ul className="list-disc pl-6 text-zinc-400">
                <li>Used without fine-tuning</li>
              </ul>
            </li>
            <li><b>Fine-Tuned DistilBERT</b>
              <ul className="list-disc pl-6 text-zinc-400">
                <li>Fine-tuned on IMDb dataset</li>
              </ul>
            </li>
          </ol>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Performance (Test Set)</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li><b>Baseline (TF-IDF + LR)</b> → 90.25% Accuracy</li>
            <li><b>Pre-trained DistilBERT</b> → 83.15% Accuracy</li>
            <li><b>Fine-Tuned DistilBERT</b> → 86.80% Accuracy</li>
          </ul>
          <p className="mt-4 text-zinc-400 text-sm">Key insight: Model adaptation (fine-tuning) matters more than model complexity.</p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Python</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
            <li>TF-IDF Vectorizer</li>
            <li>Logistic Regression</li>
            <li>HuggingFace Transformers</li>
            <li>DistilBERT</li>
            <li>PyTorch / Trainer API</li>
            <li>Evaluation: Accuracy, F1-score</li>
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
            <Link href="/projects/5" className="bg-zinc-800 text-white px-4 py-2 rounded shadow">5</Link>
            <Link href="/projects/6" className="bg-zinc-800 text-zinc-400 hover:text-white px-4 py-2 rounded transition">6</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
