import React from "react";

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">SERVICES</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="/">
                  {" "}
                  Emergency Checkup
                </a>
                <a className="hover:opacity-75" href="/">
                  Monthly Checkup
                </a>
                <a className="hover:opacity-75" href="/">
                  Weekly Checkuo
                </a>
                <a className="hover:opacity-75" href="/">
                  Deep Checkup
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">ORAL HEALTH</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="/">
                  Fluoride Treatment
                </a>
                <a className="hover:opacity-75" href="/">
                  Cavity Filling
                </a>
                <a className="hover:opacity-75" href="/">
                  Teath Whitening
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium text-[#939393]">OUR ADDRESS</p>

              <nav className="mt-4 flex flex-col space-y-2 text-sm text-accent">
                <a className="hover:opacity-75" href="/">
                  New York - 101010 Hudson
                </a>
              </nav>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Copyright 2022 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
