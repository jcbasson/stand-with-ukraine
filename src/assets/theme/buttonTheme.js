const buttonStyles = {
  baseStyle: {
    borderRadius: "4px",
  },
  variants: {
    primary: {
      height: "48px",
      backgroundColor: "#3d65b4",
      borderColor: "#3d65b4",
      color: "#fff",
      fontFamily: "sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      outline: "none",
      _loading: {
        opacity: 1,
        _hover: {
          backgroundColor: "#3d65b4",
          borderColor: "#3d65b4",
          color: "#fff",
        },
      },
      _hover: {
        backgroundColor: "#3d65b4",
        borderColor: "#3d65b4",
        color: "#fff",
      },
      _active: {
        outline: "none",
        backgroundColor: "#3d65b4",
        borderColor: "#ffcc07",
        color: "#fff",
      },
      _focus: {
        outline: "none",
        backgroundColor: "#3d65b4",
        borderColor: "#ffcc07",
        color: "#fff",
      },
      _disabled: {},
    },
  },
};

export default buttonStyles;
