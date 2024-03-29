// Importing required modules
import Link from "next/link";

/**
 * Banner Component
 *
 * This component represents the main banner section of the website.
 * It displays a headline, description, and report to claim buttons.
 */

const Banner = () => {
  return (
    <section className="px-3 py-12 xl:px-0">
      <div className="mx-auto rounded-lg max-w-7xl bg-theme">
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-6">
            <div className="p-4 text-white md:py-16 md:pl-12">
              <h1 className="mb-4 xl:text-5xl md:text-5xl text-3xl lg:text-4xl leading-[125%] font-bold uppercase">
                get affordable, same-day coverage in no time.
              </h1>
              <p className="mb-12 text-xs md:text-base">
                With roots over a century deep in the birthplace of the
                automobile industry, USA Underwriters has the knowledge and
                expertise to help tailor a policy to suit your lifestyle, your
                budget, and your priorities.
              </p>
              <Link
                className="inline-block px-5 py-3 mb-3 mr-5 font-medium text-gray-800 transition-all duration-300 ease-linear bg-white border md:mb-0 md:inline hover:text-theme rounded-3xl border-theme"
                href="/report-claim"
              >
                Report a Claim
              </Link>
              <Link href="/learn-more">
                Learn More <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="hidden lg:col-span-6 lg:block">
            <img className="mx-auto" src="/img/banner/img.webp" alt="banner" />
          </div>
        </div>
      </div>
      {/* this is slider button but your figma file has no slider content that's why
      i just designed this button with no action */}
      <div className="flex items-center justify-center py-3">
        <div className="mx-2">
          <i className="fa-duotone fa-circle"></i>
        </div>
        <div className="mx-2">
          <i className="fa-light fa-circle"></i>
        </div>
      </div>
    </section>
  );
};

export default Banner;
