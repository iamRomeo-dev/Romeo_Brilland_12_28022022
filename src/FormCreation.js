/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useForm } from "react-hook-form";
import "twin.macro";
import { PrimaryButton } from "./Button";
import { ErrorMessage, FormGroup, Label, RequiredAsterisk } from "./Form";
import { useSetShowResults } from "./MyContext";
import { Department, USAStates } from "./utils/USAStates";
import SuperInput from "super-romeoooo";

export const FormCreation = () => {
  const setShowResults = useSetShowResults();
  const [department, setDepartment] = useState();
  const [state, setState] = useState();
  const [birth_day, setBirth_day] = useState("");
  const tempDatas = [];

  const onSubmit = (data) => {
    if (localStorage.getItem("userData") !== null) {
      let userData = localStorage.getItem("userData");
      let parsedUserData = JSON.parse(userData);
      for (let i = 0; i < parsedUserData.length; i++) {
        tempDatas.push(parsedUserData[i]);
      }
    }
    tempDatas.push({
      ...data,
      department: department,
      state: state,
      birth_day: birth_day,
      createdAt: new Date(),
    });
    localStorage.setItem("userData", JSON.stringify(tempDatas));
    setShowResults(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      birth_day: "",
      start_date: "",
      street: "",
      city: "",
      state: "",
      zip_code: "",
      department: "",
      createdAt: "",
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section tw="shadow-sm bg-white sm:rounded-md -mx-4 sm:mx-0">
          <div tw="py-5 px-4 sm:p-6">
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              <div tw="bg-gray-100 rounded-lg shadow px-5 py-6 sm:px-6">
                <h3 tw="text-lg leading-6 font-medium text-gray-900">
                  Create Employee
                </h3>
                <div tw="flex gap-4 flex-wrap">
                  <FormGroup>
                    <Label htmlFor="first_name">
                      First Name
                      <RequiredAsterisk tw="text-red-500" />
                    </Label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      {...register("first_name", {
                        required: "First Name is required",
                      })}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />{" "}
                    <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="last_name">Last Name</Label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      {...register("last_name")}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="birth_day">Date of birth</Label>
                    <SuperInput
                      name="birth_day"
                      type="date"
                      value={birth_day}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setBirth_day(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="start_date">Start Date</Label>
                    <input
                      id="start_date"
                      name="start_date"
                      type="date"
                      {...register("start_date")}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="department">Department</Label>
                    <select
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                      id="typee"
                      name="typee"
                      tw="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      {Department.map((option, index) => (
                        <option key={index} value={option._id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </div>
              </div>

              <div tw="bg-gray-100 rounded-lg shadow px-5 py-6 sm:px-6">
                <h3 tw="text-lg leading-6 font-medium text-gray-900">
                  Address
                </h3>
                <div tw="flex gap-4 flex-wrap">
                  <FormGroup>
                    <Label htmlFor="street">
                      Street
                      <RequiredAsterisk tw="text-red-500" />
                    </Label>
                    <input
                      id="street"
                      name="street"
                      type="text"
                      {...register("street")}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="city">City</Label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      {...register("city")}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="department">State</Label>
                    <select
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      id="typee"
                      name="typee"
                      tw="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      {USAStates.map((option, index) => (
                        <option key={index} value={option._id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="zip_code">Zip Code</Label>
                    <input
                      id="zip_code"
                      name="zip_code"
                      type="text"
                      {...register("zip_code")}
                      tw="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div tw="flex space-x-3 items-center justify-end mt-8">
              <PrimaryButton type="submit">Valide</PrimaryButton>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
