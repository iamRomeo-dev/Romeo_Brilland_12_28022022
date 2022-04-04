/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "twin.macro";
import { CustomerList } from "./CustomerList";
import { Home } from "./Home";

export const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  return (
    <div tw="min-h-full">
      <div tw="bg-gray-800 pb-32">
        <nav tw="bg-gray-800">
          {/* version desktop */}
          <div tw="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div tw="border-b border-gray-700">
              <div tw="flex items-center justify-between h-16 px-4 sm:px-0">
                <div tw="flex items-center">
                  <div tw="flex-shrink-0">
                    <img
                      tw="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div tw="hidden md:block">
                    <div tw="ml-10 flex items-baseline space-x-4">
                      <Link
                        tw="text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        tw="text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
                        to="/customer"
                      >
                        View Current Employees
                      </Link>
                    </div>
                  </div>
                </div>

                {/* button to open mobile menu */}
                <div tw="-mr-2 flex md:hidden">
                  <button
                    type="button"
                    tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <span tw="sr-only">Open main menu</span>
                    <svg
                      tw="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      tw="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* version mobile */}
          {showMobileMenu && (
            <div tw="border-b border-gray-700 md:hidden" id="mobile-menu">
              {/* menu */}
              <div tw="px-2 py-3 space-y-1 sm:px-3">
                <Link
                  tw="text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                  to="/"
                >
                  Home
                </Link>

                <Link
                  tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                  to="/customer"
                >
                  View Current Employees
                </Link>
              </div>
              {/* menu login */}
            </div>
          )}
        </nav>
        <header tw="py-10">
          <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 tw="text-3xl font-bold text-white">HRnet</h1>
          </div>
        </header>
      </div>

      <main tw="-mt-32">
        <div tw="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div tw="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div tw="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customer" element={<CustomerList />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
