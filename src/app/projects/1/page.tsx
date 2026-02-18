"use client";

export default function ProjectOne() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl w-full p-8 rounded-2xl shadow-xl bg-white border border-slate-200">
        <img src="/images/1.jpg" alt="Project One" className="w-full rounded-xl mb-6" />
        <h1 className="text-3xl font-bold mb-4">Project One</h1>
        <p className="text-lg text-slate-700 mb-2">This is the detail page for Project One.</p>
        {/* Add more details here */}
      </div>
    </div>
  );
}
