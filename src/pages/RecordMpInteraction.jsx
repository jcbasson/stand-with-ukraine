import { Box, Text } from "@chakra-ui/react";

const RecordMpInteraction = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontSize="xl"
    >
      <Text as="h1" variant="title">
        Record you interaction with your local MP
      </Text>
      {/* <ContactForm /> */}
    </Box>
  );
};

export default RecordMpInteraction;
