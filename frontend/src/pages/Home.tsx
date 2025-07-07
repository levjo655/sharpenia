import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-dvh w-full bg-neutral-100 dark:bg-zinc-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-serif mb-4">Welcome to Ågane</h2>
        <p className="text-lg max-w-xl text-center">
          Precision sharpening on Japanese natural stones. Handled with care, shaped with tradition.
        </p>
      </main>
    </div>
  );
}
