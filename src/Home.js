/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "twin.macro";
import { Button, PrimaryButton } from "./Button";
import { ErrorMessage, FormGroup, Label, RequiredAsterisk } from "./Form";

export const Home = () => {
  const onSubmit = (data) => {
    console.log(data);
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
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section tw="shadow-sm bg-white sm:rounded-md -mx-4 sm:mx-0">
        <div tw="py-5 px-4 sm:p-6">
          <div tw="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <FormGroup>
              <Label htmlFor="first_name">
                "First name
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("first_name", {
                  required: "First name required",
                })}
                type="text"
                id="first_name"
              />
              <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="last_name">
                Last name
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("last_name", {
                  required: "Last name required",
                })}
                type="text"
                id="last_name"
              />
              <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="birth_day">
                Birthday
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                type="date"
                name="week"
                id="birth_day"
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("birth_day", {
                  required: "birthday required",
                })}
              ></input>
              <ErrorMessage>{errors.birth_day?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="start_date">
                Start date
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("start_date", {
                  required: "Start date required",
                })}
                type="date"
                id="start_date"
              />
              <ErrorMessage>{errors.start_date?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="street">
                Street
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("street", {
                  required: "Street required",
                })}
                type="text"
                id="street"
              />
              <ErrorMessage>{errors.street?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="city">
                City
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("city", {
                  required: "City required",
                })}
                type="text"
                id="city"
              />
              <ErrorMessage>{errors.city?.message}</ErrorMessage>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="state">
                State
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("state", {
                  required: "State required",
                })}
                type="text"
                id="state"
              />
              <ErrorMessage>{errors.state?.message}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="zip_code">
                zip_code
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("zip_code", {
                  required: "zip_code required",
                })}
                type="text"
                id="zip_code"
              />
              <ErrorMessage>{errors.zip_code?.message}</ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="department">
                Department
                <RequiredAsterisk tw="text-red-500" />
              </Label>
              <input
                tw="flex-1 block w-full text-sm z-0 focus:z-10 border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) disabled:(bg-gray-50 text-gray-500)"
                {...register("department", {
                  required: "department required",
                })}
                type="text"
                id="department"
              />
              <ErrorMessage>{errors.department?.message}</ErrorMessage>
            </FormGroup>
          </div>
          <div tw="flex space-x-3 items-center justify-end mt-8">
            <Button as={Link} to={`/`}>
              Return
            </Button>
            <PrimaryButton type="submit">Valide</PrimaryButton>
          </div>
        </div>
      </section>
    </form>
  );
};
