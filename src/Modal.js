/** @jsxImportSource @emotion/react */
import "twin.macro";

export const Modal = ({ setShowResults, showResults }) => {
  return (
    <div
      tw="fixed inset-0 overflow-y-auto mt-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div tw="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          tw="fixed z-10 inset-0 bg-gray-200 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setShowResults(!showResults)}
        ></div>
        <span
          tw="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div tw="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all z-50 sm:fixed sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
          <div tw="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div tw="sm:flex sm:items-start justify-between">
              <div tw="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div tw="mt-2">
                  <p tw="text-sm text-gray-500">User created !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
