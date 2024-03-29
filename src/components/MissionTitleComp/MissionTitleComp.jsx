import Link from "next/link";
/**
 * MissionTitleComp Component
 * 
 * This component represents the title and description of the mission section.
 * It displays the mission title and a brief description about the company's mission.
 */

const MissionTitleComp = () => {
  return (
    <section className="px-3 mx-auto max-w-7xl xl:px-0">
      <div className="grid grid-cols-12 pt-4 pb-8 md:py-8 lg:gap-8">
        <div className="col-span-12 mb-2 lg:col-span-5 lg:mb-0">
          <span className="leeading-[150%] font-medium text-gray-700">
            Beleive
          </span>
          <h2 className="uppercase text-theme font-semibold md:text-2xl text-xl leading-[150%]">
            our mission
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs text-justify md:text-base">
            Our mission has remained largely unchanged over the century and a
            half the company has operated: to quickly provide affordable
            insurance solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionTitleComp;