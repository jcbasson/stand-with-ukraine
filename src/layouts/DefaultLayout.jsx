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
      paddingTop="16px"
      paddingBottom="5px"
      backgroundImage={`url(${BannerImg})`}
    >
      <Image
        src={StandWithUkraineLogo}
        height="300px"
        width="224px"
        alt="Add Bank Card"
        marginRight="24px"
      />

      <Box
        as="main"
        display="flex"
        flexDirection="column"
        height="100%"
        alignSelf="center"
        marginTop="16px"
        backgroundColor="#e4edf5"
        color="#434344"
        borderRadius="0.75rem"
        padding="24px 16px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
