import {
  RiFileChartLine,
  RiHistoryLine,
  RiQrScanLine,
  RiRobot2Line,
} from "@remixicon/react"

const features = [
  {
    name: "Scan price tag",
    description:
      "help you detect products in any format and enable you to input product detail as well.",
    icon: RiQrScanLine,
  },
  {
    name: "Keep track of your shoppings",
    description:
      "reminds you when and where you did shopping and how much you spent.",
    icon: RiHistoryLine,
  },
  {
    name: "Give you feedback about your diet",
    description:
      "Based on your recent shoppings and your personal condition, give you nutritional analysis.",
    icon: RiFileChartLine,
  },
  {
    name: "Manage meal plans for you",
    description:
      "help you create plans for dairy or weekly meals and customize prefered meal plans.",
    icon: RiRobot2Line,
  },
]

export default function FeatureItems() {
  return (
    <>
      <div className="mx-auto mb-20 w-full max-w-6xl px-3 py-5">
        <dl className="grid grid-cols-4 gap-10">
          {features.map((item) => (
            <div
              key={item.name}
              className="col-span-full sm:col-span-2 lg:col-span-1"
            >
              <div className="w-fit rounded-lg p-2 shadow-md shadow-purple-400/30 ring-1 ring-black/5 dark:shadow-purple-600/30 dark:ring-white/5">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                {item.name}
              </dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
