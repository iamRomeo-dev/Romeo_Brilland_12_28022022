/** @jsxImportSource @emotion/react */
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";
import "twin.macro";
import { Pagination } from "./Pagination";

export const CustomerList = () => {
  const [sortBy, setSortBy] = useState("first_name");
  const [search, setSearch] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(5);

  // Page number is where we are. Starts a 0 by default and if a page is set in the local storage, it is saved
  const [currentPageNumber, setCurrentPageNumber] = useState(
    localStorage.getItem("locationSearch") !== null
      ? localStorage.getItem("locationSearch")
      : 0
  );

  const pagesVisited = currentPageNumber * usersPerPage;
  let userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  // ceil around to up number. Provide the total of pages
  const totalOfPages = Math.ceil(parsedUserData.length / usersPerPage);

  let inputSearchHandler = (e) => {
    let lowerCase = e.target.value;
    setSearch(lowerCase);
  };
  return (
    <section tw="shadow-sm bg-white sm:rounded-md -mx-4 sm:mx-0">
      <div tw="px-4 sm:px-6 lg:px-8">
        <div tw="mt-8 flex flex-col">
          <div tw="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div tw="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div tw="flex gap-4 p-4 items-center">
                <input
                  onChange={inputSearchHandler}
                  id="search"
                  tw="block w-full h-full pl-8 pr-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 sm:text-sm rounded-md focus:(outline-none placeholder-gray-400 ring-0 border-transparent) sm:(text-sm)"
                  placeholder="Search"
                  type="search"
                />

                <select
                  id="usersPerPage"
                  name="usersPerPage"
                  tw="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="5"
                  onChange={(e) => {
                    setUsersPerPage(Number(e.target.value));
                  }}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </div>
              <div tw="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table tw="min-w-full divide-y divide-gray-300">
                  <thead tw="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        tw="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        onClick={() => setSortBy("first_name")}
                      >
                        <div tw="flex gap-2">
                          First Name
                          {sortBy === "first_name" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("last_name")}
                      >
                        <div tw="flex gap-2">
                          Last Name
                          {sortBy === "last_name" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("start_date")}
                      >
                        <div tw="flex gap-2">
                          Start Date
                          {sortBy === "start_date" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("department")}
                      >
                        <div tw="flex gap-2">
                          Department
                          {sortBy === "department" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        onClick={() => setSortBy("birth_day")}
                      >
                        <div tw="flex gap-2">
                          Date of Birth
                          {sortBy === "birth_day" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("street")}
                      >
                        <div tw="flex gap-2">
                          Street
                          {sortBy === "street" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("city")}
                      >
                        <div tw="flex gap-2">
                          City
                          {sortBy === "city" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("state")}
                      >
                        <div tw="flex gap-2">
                          State
                          {sortBy === "state" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                        onClick={() => setSortBy("zip_code")}
                      >
                        <div tw="flex gap-2">
                          Zip Code
                          {sortBy === "zip_code" ? (
                            <ChevronUpIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon tw="mr-3 h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody tw="divide-y divide-gray-200 bg-white">
                    {parsedUserData
                      .sort((a, b) =>
                        sortBy === "last_name"
                          ? a.last_name
                              .toLowerCase()
                              .localeCompare(b.last_name.toLowerCase())
                          : sortBy === "department"
                          ? // for the select add an empty string if nothing is selected
                            (a?.department === undefined ? "" : a?.department)
                              ?.toLowerCase()
                              .localeCompare(b?.department?.toLowerCase())
                          : sortBy === "birth_day"
                          ? a.birth_day
                              .toLowerCase()
                              .localeCompare(b.birth_day.toLowerCase())
                          : sortBy === "street"
                          ? a.street
                              .toLowerCase()
                              .localeCompare(b.street.toLowerCase())
                          : sortBy === "city"
                          ? a.city
                              .toLowerCase()
                              .localeCompare(b.city.toLowerCase())
                          : sortBy === "state"
                          ? (a?.state === undefined ? "" : a?.state)
                              ?.toLowerCase()
                              .localeCompare(b?.state?.toLowerCase())
                          : sortBy === "zip_code"
                          ? a.zip_code
                              .toLowerCase()
                              .localeCompare(b.zip_code.toLowerCase())
                          : a.first_name
                              .toLowerCase()
                              .localeCompare(b.first_name.toLowerCase())
                      )
                      .filter(
                        (user) =>
                          user.first_name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user.last_name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user?.department
                            ?.toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user.birth_day
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user.street
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user.city
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user?.state
                            ?.toLowerCase()
                            .includes(search.toLowerCase()) ||
                          user.zip_code
                            .toLowerCase()
                            .includes(search.toLowerCase())
                      )

                      // first page is the number per page, then next page will be this page plus the number of users per page
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((user) => (
                        <tr key={user.first_name}>
                          <td tw="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {user.first_name}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.last_name}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.start_date}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.department ? user.department : ""}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.birth_day}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.street}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.city}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.state ? user.state : ""}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.zip_code}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                totalOfPages={totalOfPages}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
