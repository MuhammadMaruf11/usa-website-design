// Importing required modules
import Link from "next/link";

/**
 * FeatureTitleComp Component
 *
 * This component represents the title and description of a specific feature,
 * which in this case is the "MCCA refund information".
 */

const FeatureTitleComp = () => {
  return (
    <section className="px-3 mx-auto max-w-7xl xl:px-0">
      <div className="grid grid-cols-12 py-8 lg:gap-8">
        <div className="col-span-12 mb-12 text-center lg:text-start lg:col-span-5 lg:mb-0">
          <span className="leeading-[150%] font-medium text-gray-700">
            Our Features
          </span>
          <h2 className="uppercase mb-6 font-semibold md:text-2xl text-xl leading-[150%]">
            mcca refund information
          </h2>
          <Link
            className="block w-full px-5 py-3 text-white transition-all duration-300 ease-linear border md:inline hover:text-theme bg-theme rounded-3xl border-theme hover:bg-white"
            href="/mcca-refund-faq"
          >
            MCCA Refund FAQ
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs text-justify md:text-base">
            The Michigan Catastrophic Claims Association approved refunds for
            certain Michigan Policyholders due a surplus of funds being held by
            the MCCA. The approved refund will be $400 per eligible vehicle
            insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or
            $80 if the vehicle is an insured historical vehicle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureTitleComp;
