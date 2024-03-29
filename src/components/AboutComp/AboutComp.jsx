// Importing required modules
import Link from "next/link";

/**
 * AboutComp Component
 *
 * This component represents the About Us section of the website.
 * It displays information about the company's history and evolution.
 */
const AboutComp = () => {
  return (
    <section className="pt-12 pb-0 md:py-12">
      <div className="px-3 mx-auto max-w-7xl xl:px-0">
        <h2 className="mb-2 text-xl font-semibold text-center md:mb-8 md:font-medium md:text-4xl">
          About Us
        </h2>
        <nav
          className="flex justify-center mb-8 md:mb-20"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
                  About us
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 mb-2 lg:col-span-2 lg:mb-0">
            <span className="leeading-[150%] hidden lg:block font-medium text-gray-700">
              About us
            </span>
            <h2 className="uppercase font-semibold md:text-2xl text-xl leading-[150%]">
              History
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <p className="text-xs text-justify md:text-base">
              In 1962, the Southern Michigan Mutual Insurance Company celebrated
              it’s 100th year in continuous operation and was presented with a
              plaque by the State of Michigan as a Centenary Business.
            </p>
          </div>
        </div>
        <div className="mx-auto my-6 lg:my-12 rounded-lg grid grid-cols-12 lg:gap-8 max-w-7xl bg-[url('/img/bg/img-2.webp')] xl:h-[520px] lg:h-[450px] md:h-96 h-40 bg-no-repeat bg-cover"></div>
        <div className="flex flex-col gap-8">
          <p className="text-xs text-justify md:text-base">
            In 2013, Southern Michigan Mutual Insurance Company became USA
            Underwriters. The name may have changed, but the dedication to our
            customers, our drive to serve them and their communities hasn’t. USA
            Underwriters’ mission as a leading Property and Casualty Insurance
            company in Michigan, remains largely unchanged from the mission of
            it’s progenitor: to provide affordable, quality insurance solutions
            to families and individuals.
          </p>
          <p className="hidden text-xs text-justify md:text-base lg:block">
            Insurance has changed a lot in the last century and a half. When
            Southern Michigan Mutual Insurance Company was founded, automobiles
            simply didn’t exist. That all changed — right in the company’s back
            yard — at the turn of the 20th century when Henry Ford’s Model T
            began rolling off the assembly line.
          </p>
          <p className="hidden text-xs text-justify md:text-base lg:block">
            In an instant of history, the car supplanted the horse and buggy as
            American’s primary mode of transportation. The era of the Automobile
            had begun, and the Southern Michigan Mutual Insurance Company was
            front and center for one of the most dramatic shifts in American
            history. The car accelerated economic growth, and offered a freedom
            of travel that had been nigh-unimaginable for the vast majority of
            people through the whole of human history.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
