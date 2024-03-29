/**
 * FeatureComp Component
 *
 * This component represents the features section of the website.
 * It displays information about the different features offered by USA Underwriters.
 */

const FeatureComp = () => {
  return (
    <section className="px-3 mx-auto max-w-7xl xl:px-0">
      <div className="grid gap-4 py-4 mx-auto lg:py-12 md:grid-cols-2 max-w-7xl lg:grid-cols-3 lg:gap-8">
        <div className="p-8 rounded-lg shadow-md lg:block xl:pb-20">
          <div className="inline-block p-3 mb-3 bg-gray-200 rounded-full">
            <img src="/img/icons/feature-icon.webp" alt="feature" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">
            Affordable Auto Insurance
          </h3>
          <p>USA Underwriters offers affordable rates on quality coverage.</p>
        </div>
        <div className="hidden p-8 rounded-lg shadow-md md:block xl:pb-20">
          <div className="inline-block p-3 mb-3 bg-gray-200 rounded-full">
            <img src="/img/icons/feature-icon.webp" alt="feature" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Accidents Can Add Up</h3>
          <p>
            Accidents and infractions can linger long after the fines are paid
            and the car is repaired.
          </p>
        </div>
        <div className="hidden p-8 rounded-lg shadow-md lg:block xl:pb-20">
          <div className="inline-block p-3 mb-3 bg-gray-200 rounded-full">
            <img src="/img/icons/feature-icon.webp" alt="feature" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Price Conscious</h3>
          <p>
            Price conscious consumers choose USA Underwriters for affordable
            auto insurance solutions.
          </p>
        </div>
      </div>
      {/* this is slider button but your figma file has no slider preview that's why
      i just designed this button with no action */}
      <div className="flex items-center justify-center pt-3 pb-6 lg:hidden">
        <div className="mx-2">
          <i className="fa-duotone fa-circle"></i>
        </div>
        <div className="mx-2">
          <i className="fa-light fa-circle"></i>
        </div>
        <div className="mx-2">
          <i className="fa-light fa-circle"></i>
        </div>
      </div>
    </section>
  );
};

export default FeatureComp;