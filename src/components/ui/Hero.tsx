import Link from "next/link"
import { Button } from "../Button"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-gray-50 dark:to-gray-300"
        style={{ animationDuration: "700ms" }}
      >
        keep shopping under budget <br />{" "}
        <span className="text-purple-500">in real-time</span>
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
        style={{ animationDuration: "900ms" }}
      >
        Scan the price tag at supermarket and .sh manages your shopping cost
        while taking a cart. Now you can throw away receipts into trash.
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-10 font-semibold">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScuXjw5Ujna2QaYGjgIzsGcgGeZkR2u_gc-a_6hhbkfoSfA1w/viewform?usp=dialog">
            Get started
          </Link>
        </Button>
        <Button
          asChild
          variant="light"
          className="group gap-x-2 bg-transparent font-semibold hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
        ></Button>
      </div>
      <div
        className="m-10 animate-slide-up-fade"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage />
      </div>
    </section>
  )
}
