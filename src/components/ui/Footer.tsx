import ThemeSwitch from "../ThemeSwitch"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-10 sm:pt-10 lg:pt-10">
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <div className="flex space-x-6">
            <ThemeSwitch />
          </div>
          <div className="flex space-x-5">
            <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=deff22bd-b2d0-4574-bd17-3f65781b225d">
                Privacy
              </a>
            </p>
            <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=46abb8b6-3576-4456-9b3d-14aafbec924c">
                Terms
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
