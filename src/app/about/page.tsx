import { cx } from "@/lib/utils"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="vision-title"
        className="mx-auto h-screen animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          My Words
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            I came up with this idea while I went out for shopping at a
            supermarket. Since I'm living alone, had to take into account budget
            stuffs which drove me into building this app. Also added features to
            make meal plans because it felt so lazy to think about like "Damn
            what i gonna cook for tonight?", "Is it nutritious? idk, but I want
            to know if there any improvements in my dairy life"... so hope you
            enjoy it and it is useful for someone who have thought as the same
            way as me.
          </p>
          <p className="text-lg leading-8">
            Built on my own, so I would appreciate any feedback! DM me please.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – Sota
          </p>
        </div>
      </section>
    </div>
  )
}
