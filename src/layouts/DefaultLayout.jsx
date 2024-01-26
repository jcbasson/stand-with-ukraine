import { Image, Box } from "@chakra-ui/react";
import BannerImg from "../assets/images/sydney-banner.jpeg";
import StandWithUkraineLogo from "../assets/images/stand-with-ukraine-logo.png";

const DefaultLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="auto"
      height="100%"
      width="100%"
      backgroundRepeat="no-repeat"
      backgroundSize="100% auto"
      backgroundColor="black"
      padding="16px"
      backgroundImage={`url(${BannerImg})`}
    >
      <Image
        src={StandWithUkraineLogo}
        height="300px"
        width="224px"
        alt="Add Bank Card"
      />

      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignSelf="center"
        marginTop="16px"
        backgroundColor="#e4edf5"
        color="#434344"
        borderRadius="0.75rem"
        padding="24px 16px"
        width={{
          base: "100%", // All breakpoints
          sm: "80%", // Breakpoints above 'sm'
          md: "60%", // Breakpoints above 'md'
          lg: "60%", // Breakpoints above 'lg'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
