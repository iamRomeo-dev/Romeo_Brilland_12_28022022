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
                        tw="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        tw="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/customer"
                      >
                        View Current Employees
                      </Link>
                    </div>
                  </div>
                </div>
                <div tw="hidden md:block">
                  <div tw="ml-4 flex items-center md:ml-6">
                    <div tw="ml-3 relative">
                      <div>
                        <button
                          type="button"
                          tw="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={() => setShowLoginMenu(!showLoginMenu)}
                        >
                          <span tw="sr-only">Open user menu</span>
                          <img
                            tw="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </button>
                      </div>

                      {showLoginMenu && (
                        <div
                          tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu-button"
                          tabIndex="-1"
                        >
                          <Link
                            to="#"
                            tw="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-0"
                          >
                            Your Profile
                          </Link>

                          <Link
                            to="#"
                            tw="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-1"
                          >
                            Settings
                          </Link>

                          <Link
                            to="#"
                            tw="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-2"
                          >
                            Sign out
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* button to open mobile menu */}
                <div tw="-mr-2 flex md:hidden">
                  <button
                    type="button"
                    tw="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                  tw="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  to="/"
                >
                  Dashboard
                </Link>

                <Link
                  tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  to="/customer"
                >
                  View Current Employees
                </Link>
              </div>
              {/* menu login */}
              <div tw="pt-4 pb-3 border-t border-gray-700">
                <div tw="flex items-center px-5">
                  <div tw="flex-shrink-0">
                    <img
                      tw="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div tw="ml-3">
                    <div tw="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div tw="text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    tw="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span tw="sr-only">View notifications</span>
                    <svg
                      tw="h-6 w-6"
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
                <div tw="mt-3 px-2 space-y-1">
                  <Link
                    tw="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    to="/"
                  >
                    Your Profile
                  </Link>
                  <Link
                    tw="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    to="/"
                  >
                    Settings
                  </Link>
                  <Link
                    tw="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    to="/"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
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
