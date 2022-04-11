/** @jsxImportSource @emotion/react */
import "twin.macro";

export const CustomerList = () => {
  let userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  return (
    <section tw="shadow-sm bg-white sm:rounded-md -mx-4 sm:mx-0">
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
                        First Name
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        tw="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Date of Birth
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Street
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        State
                      </th>
                      <th
                        scope="col"
                        tw="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Zip Code
                      </th>
                    </tr>
                  </thead>
                  <tbody tw="divide-y divide-gray-200 bg-white">
                    {parsedUserData
                      .sort((a, b) =>
                        a.first_name
                          .toLowerCase()
                          .localeCompare(b.first_name.toLowerCase())
                      )
                      .map((user) => (
                        <tr key={user.first_name}>
                          <td tw="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {user.first_name}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.last_name}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.start_date}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.department}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.birth_day}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.street}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.city}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.state}{" "}
                          </td>
                          <td tw="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {user.zip_code}{" "}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
