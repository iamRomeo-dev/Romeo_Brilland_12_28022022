/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import "twin.macro";
import qs from "qs";
import tw from "twin.macro";

export const Pagination = ({
  totalOfPages,
  currentPageNumber,
  setCurrentPageNumber,
}) => {
  const history = useNavigate();
  const location = useLocation();

  // create an array with the totalOfPages
  const pages = [...Array(totalOfPages).keys()];

  const goToPrevious = (page) => {
    setCurrentPageNumber(Math.max(0, Number(page) - 1));
    history(
      `${location.pathname}${qs.stringify(
        {
          page: Number(page) - 1,
        },
        { addQueryPrefix: true }
      )}`
    );
  };
  const goToNext = (page) => {
    setCurrentPageNumber(Math.min(totalOfPages, Number(page) + 1));
    history(
      `${location.pathname}${qs.stringify(
        {
          page: Number(page) + 1,
        },
        { addQueryPrefix: true }
      )}`
    );
  };

  localStorage.setItem("locationSearch", location.search.substring(6));

  return (
    <nav tw="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-4">
      {/* PREVIOUS button */}
      <div tw="-mt-px w-0 flex-1 flex">
        {Number(currentPageNumber) !== 0 ? (
          // Active previous btn
          <button
            onClick={() => goToPrevious(currentPageNumber)}
            tw="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            <ArrowNarrowLeftIcon
              tw="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        ) : (
          // Inactive previous btn
          <span tw="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 opacity-20 hover:text-gray-700 hover:border-gray-300">
            <ArrowNarrowLeftIcon
              tw="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </span>
        )}
      </div>
      <div tw="hidden md:-mt-px md:flex">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => {
              setCurrentPageNumber(page);
              history(
                `${location.pathname}${qs.stringify(
                  {
                    page,
                  },
                  { addQueryPrefix: true }
                )}`
              );
            }}
            tw="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            css={
              currentPageNumber === page &&
              tw`text-indigo-400 border-indigo-300 border-t-2`
            }
          >
            {Number(page) + 1}
          </button>
        ))}
      </div>
      <div tw="-mt-px w-0 flex-1 flex justify-end">
        {Number(currentPageNumber) + 1 !== totalOfPages ? (
          <button
            onClick={() => goToNext(currentPageNumber)}
            tw="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <ArrowNarrowRightIcon
              tw="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        ) : (
          <span tw="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 opacity-20 hover:text-gray-700 hover:border-gray-300">
            Next
            <ArrowNarrowRightIcon
              tw="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </nav>
  );
};
