// Importing required modules
import Link from "next/link";

/**
 * ReportComp Component
 *
 * This component represents a section dedicated to reporting insurance claims.
 * It provides a background image, a title, a brief description, and a button to report a claim.
 */

const ReportComp = () => {
  return (
    <section className="px-3 py-16 ">
      <div className="mx-auto rounded-lg grid grid-cols-12 lg:gap-8 max-w-7xl md:bg-[url('/img/bg/img-1.webp')] xl:h-[520px] lg:h-[450px] md:h-96 bg-no-repeat bg-cover">
        <div className="flex items-end col-span-12 lg:col-span-6 md:col-span-7">
          <div className="p-4 text-white rounded-lg lg:p-8 md:m-4 lg:mb-12 xl:ml-24 lg:ml-16 bg-theme">
            <h5 className="mb-8 text-xl font-semibold">
              Obtain cost-effective same-day insurance coverage quickly.
            </h5>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
              leo. Etiam enim varius dictum amet hac imperdiet facilisis
              malesuada.
            </p>
            <Link
              className="inline-block w-full px-5 py-3 text-center text-white transition-all duration-300 ease-linear bg-black lg:inline hover:text-theme rounded-3xl hover:bg-white"
              href="/report-claim"
            >
              Report a Claim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportComp;
