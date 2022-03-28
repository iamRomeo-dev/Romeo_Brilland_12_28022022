/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import "twin.macro";
import tw from "twin.macro";

export const RequiredAsterisk = (props) => {
  return (
    <span tw="text-red-500 font-medium" {...props}>
      *
    </span>
  );
};

export const Label = ({ children, ...props }) => {
  return (
    <label
      tw="block text-sm font-medium text-gray-700 whitespace-nowrap truncate"
      {...props}
    >
      {children}
    </label>
  );
};

export const ErrorMessage = styled("p")(
  tw`flex text-sm font-medium pt-1 text-red-500`
);

export const FormGroup = ({ children, ...props }) => {
  return (
    <div tw="space-y-1" {...props}>
      {children}
    </div>
  );
};
