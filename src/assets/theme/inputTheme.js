import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  // field: {
  //   outline: 0,
  //   appearance: "none",
  //   transitionProperty: "common",
  //   transitionDuration: "normal",
  //   fontFamily: 'sans-serif',
  //   fontWeight: 400,
  //   color: colors.input.text.default,
  //   borderRadius: "2px",
  //   bg: colors.input.background.default,
  //   borderColor: colors.input.border.default,
  //   border: "1px",
  //   height: "48px",
  //   padding: "16px 12px",
  //   defaultProps: {
  //     errorBorderColor: colors.extended.red[60],
  //     focusBorderColor: colors.brand.primary.orange,
  //   },
  //   _hover: {
  //     borderColor: colors.input.border.focus,
  //   },
  //   _focus: {
  //     outline: 0,
  //     borderColor: colors.input.border.focus,
  //     boxShadow: "0px 0px 0px 2px rgba(253, 100, 0, 0.3)",
  //   },
  //   _active: {
  //     borderColor: colors.input.border.active,
  //   },
  //   _inactive: {
  //     borderColor: colors.input.border.inactive,
  //   },
  //   _filled: {
  //     borderColor: colors.input.border.filled,
  //   },
  //   _disabled: {
  //     opacity: 0.4,
  //     cursor: "not-allowed",
  //     borderColor: colors.input.border.disabled,
  //     bg: colors.input.border.disabled,
  //   },
  // },
});

export default defineMultiStyleConfig({
  baseStyle,
});
