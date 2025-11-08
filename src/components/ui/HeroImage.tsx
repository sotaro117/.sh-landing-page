"use client"

import ThemedImage from "./ThemedImage"

export default function HeroImage() {
  return (
    <section aria-label="Hero Image of the app" className="flow-root">
      <div className="relative rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
        <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <ThemedImage
            alt="A preview of the app"
            width={300}
            height={500}
            className="mx-auto rounded-xl shadow-2xl dark:shadow-indigo-600/10"
          />
        </div>
      </div>
    </section>
  )
}
