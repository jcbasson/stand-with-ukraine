import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";

export const UpliftedInput = styled(Input)`
  border-color: #3d65b4;
  height: 48px;
  border-radius: 4px;
  color: #3d65b4,
  fontFamily: "sans-serif",
  fontWeight: 400,
  fontSize: 1.5rem,
  &:hover {
    border-color:  #ffcc07;
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(108,163,220, 0.3);
    border-color: #ffcc07;
  }
`;

const InputComp = (props) => {
  return (
    <UpliftedInput
      autoFocus
      variant="outline"
      errorBorderColor="red"
      _hover={{
        borderColor: "#6ca3dc",
      }}
      {...props}
    />
  );
};

export default InputComp;
