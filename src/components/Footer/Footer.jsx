/**
 * Footer Component
 *
 * This component represents the footer section of the website.
 * It displays various sections including USA Underwriter information, support details,
 * and contact information.
 */

const Footer = () => {
  return (
    <footer className="text-sm ">
      <div className="py-8 bg-gray-800 md:py-12">
        <div className="hidden gap-4 mx-auto md:grid md:grid-cols-2 max-w-7xl lg:grid-cols-3 xl:gap-16 lg:gap-8">
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">USA Underwriter</h3>
            <ul>
              <li>NAIC #: 30457</li>
              <li>P.O. Box 2426</li>
              <li>Rancho Cucamonga, CA, 91729</li>
            </ul>
          </div>
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">Underwriting Support</h3>
            <ul>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-clock"></i> Monday
                - Friday, 9:00 am - 6:00 pm ET
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-phone"></i> +1
                (248) 541-2800
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-envelope"></i>{" "}
                Customerservice@usaunderwriters.com
              </li>
            </ul>
          </div>
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">
              Policy Suspensions And Coverage Approvais
            </h3>
            <ul>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-clock"></i> Monday
                - Friday, 9:00 am - 6:00 pm ET
              </li>
            </ul>
          </div>
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">
              Customer ervice &amp; Support
            </h3>
            <ul>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-clock"></i> Monday
                - Friday, 9:00 am - 6:00 pm ET
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-phone"></i> +1
                (248) 541-2800
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-envelope"></i>{" "}
                Customerservice@usaunderwriters.com
              </li>
            </ul>
          </div>
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">
              Claims Administration
            </h3>
            <ul>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-clock"></i> Monday
                - Friday, 9:00 am - 6:00 pm ET
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-phone"></i> +1
                (248) 541-2800
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-envelope"></i>{" "}
                Customerservice@usaunderwriters.com
              </li>
            </ul>
          </div>
          <div className="px-5 text-white">
            <h3 className="mb-3 text-lg font-semibold">
              PIP Qualification Question and Submissions for Coverage
            </h3>
            <ul>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-phone"></i> +1
                (248) 541-2800
              </li>
              <li>
                <i className="mb-2 mr-1 fa-sharp fa-solid fa-envelope"></i>{" "}
                Customerservice@usaunderwriters.com
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <div className="max-w-screen-xl px-5 mx-auto text-white min-h-sceen">
            <div className="grid max-w-xl mx-auto">
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium"> USA Underwriting</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium">
                    {" "}
                    Customer Service & Support
                  </h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium">
                    {" "}
                    Claims Administration
                  </h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
              <br />
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium">
                    {" "}
                    Underwriting Support
                  </h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium">
                    {" "}
                    Policy Suspensions And Coverage Approvals
                  </h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between p-4 list-none border border-gray-700 cursor-pointer">
                  <h4 className="text-base font-medium">
                    {" "}
                    RIP Qualification Question And Submissions for Coverage
                  </h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="p-4 bg-gray-900 border border-gray-700 group-open:animate-fadeIn">
                  <li>Monday - Friday, 9:00 am - 6:00 pm ET</li>
                  <li>+1 (248) 541-2800</li>
                  <li>customerservice@usaunderwriters.com</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-white bg-gray-800 lg:text-sm md:text-gray-900 md:bg-white">
        <div className="justify-between p-4 mx-auto text-center md:text-start xl:px-0 max-w-7xl md:flex">
          <p className="hidden md:block">
            Copyright 2022 USA Underwriters <br className="block md:hidden" />
            <strong> | Privacy Policy | Terms of Use</strong>
          </p>
          <p className="block mb-3 md:hidden">
            Copyright 2022 USA Underwriters <br />
            Privacy Policy | Terms of Use
          </p>
          <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
