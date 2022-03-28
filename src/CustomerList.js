/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useUser } from "./MyContext";

export const CustomerList = () => {
  const user = useUser();
  console.log("customerlist", user);
  return (
    <div tw="px-4 sm:px-6 lg:px-8">
      <div tw="mt-8 flex flex-col">
        <div tw="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div tw="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div tw="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table tw="min-w-full divide-y divide-gray-300">
                <thead tw="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      tw="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Firstname
                    </th>
                    <th
                      scope="col"
                      tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Lastname
                    </th>
                    <th
                      scope="col"
                      tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Role
                    </th>
                    <th scope="col" tw="relative py-3 pl-3 pr-4 sm:pr-6">
                      <span tw="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody tw="divide-y divide-gray-200 bg-white">
                  {/* {people.map((person) => ( */}
                  <tr key={user.first_name}>
                    <td tw="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {user.first_name}
                    </td>
                    <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.last_name}{" "}
                    </td>
                    <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.first_name}{" "}
                    </td>
                    <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.first_name}{" "}
                    </td>
                    <td tw="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" tw="text-indigo-600 hover:text-indigo-900">
                        Edit<span tw="sr-only">, {user.first_name}</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
