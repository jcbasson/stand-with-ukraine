import { Box, Text } from "@chakra-ui/react";

const ChartColorInfo = () => {
  return (
    <Box
      display="flex"
      flexWrap={{ base: "wrap", md: "nowrap" }} // Wrap on base, no wrap on medium devices and above
      gap="16px"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      {/* First two items */}
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        height="20px"
        width={{ base: "calc(50% - 8px)", md: "auto" }}
      >
        <Box
          width="20px"
          height="100%"
          backgroundColor="rgba(255, 206, 86, 0.2)"
        ></Box>
        <Text variant="tiny">Messaged</Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        height="20px"
        width={{ base: "calc(50% - 8px)", md: "auto" }}
      >
        <Box
          width="20px"
          height="100%"
          backgroundColor="rgba(61, 101, 180, 0.2)"
        ></Box>
        <Text variant="tiny">Met with</Text>
      </Box>

      {/* Next two items */}
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        height="20px"
        width={{ base: "calc(50% - 8px)", md: "auto" }}
      >
        <Box
          width="20px"
          height="100%"
          backgroundColor="rgba(52, 229, 235, 0.2)"
        ></Box>
        <Text variant="tiny">Responded</Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        height="20px"
        width={{ base: "calc(50% - 8px)", md: "auto" }}
      >
        <Box
          width="20px"
          height="100%"
          backgroundColor="rgba(52, 235, 122, 0.2)"
        ></Box>
        <Text variant="tiny">Stands with Ukraine</Text>
      </Box>

      {/* Fifth item */}
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        height="20px"
        width={{ base: "100%", md: "auto" }}
      >
        <Box
          width="20px"
          height="100%"
          backgroundColor="rgba(219, 4, 4, 0.2)"
        ></Box>
        <Text variant="tiny">Does not stand with Ukraine</Text>
      </Box>
    </Box>
  );
};

export default ChartColorInfo;
