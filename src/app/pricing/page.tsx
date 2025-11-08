"use client"
import { RiCheckLine } from "@remixicon/react"

type FixedPrice = string

interface VariablePrice {
  monthly: string
  annually: string
}

interface Plan {
  name: string
  price: FixedPrice | VariablePrice
  description: string
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "0€",
    description: "For users who have only minimum features",
    features: ["1 free account", "Scan price tag", "Keep track of shopping"],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Ext",
    price: "9.99€",
    description: "For users who want to makes use of unlimited AI features",
    features: [
      "1 extension account",
      "Scan price tag",
      "Keep track of shopping",
      "Generate analysis report/feedback",
      "Manage meal plans with AI",
      "Meal plan assistant for customization",
      "Make weekly meal plans",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Get started",
    buttonLink: "#",
  },
]

export default function Pricing() {
  // const [billingFrequency, setBillingFrequency] = React.useState<
  //   "monthly" | "annually"
  // >("monthly")
  return (
    <div className="px-3">
      <section
        aria-labelledby="pricing-title"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
          Pricing
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Plans that improve your dietary life. Our pricing models ensure that
          removing burdens doesn&rsquo;t come at the cost of your budget.
        </p>
      </section>
      <section
        id="pricing-overview"
        className="mt-5 animate-slide-up-fade"
        aria-labelledby="pricing-overview"
        style={{
          animationDuration: "600ms",
          animationDelay: "200ms",
          animationFillMode: "backwards",
        }}
      >
        <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-2">
          {plans.map((plan, planIdx) => (
            <div key={planIdx} className="mt-6">
              {plan.isRecommended ? (
                <div className="flex h-4 items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-indigo-600 dark:border-indigo-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-indigo-600 dark:bg-gray-950 dark:text-indigo-400">
                        Recommended
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-4 items-center">
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                </div>
              )}
              <div className="mx-auto max-w-md">
                <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-center gap-x-3">
                  <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                    {plan.price.toString()}
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    per user <br /> per month
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                ></ul>
                <ul
                  role="list"
                  className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
