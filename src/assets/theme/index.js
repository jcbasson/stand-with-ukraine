import { extendTheme } from "@chakra-ui/react";
import textStyles from "./textTheme";
import components from "./chakraComponents";

const theme = extendTheme({
  textStyles,
  components,
});

export default theme;
