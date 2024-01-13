import { Box, Text } from "@chakra-ui/react";
import MPForm from "../components/MPForm";

const RecordMpInteraction = () => {
  return (
    <Box display="flex" flexDirection="column" gap="24px" height="100%">
      <Text as="h1" variant="title">
        Record you interaction with your local MP
      </Text>
      <MPForm />
    </Box>
  );
};

export default RecordMpInteraction;
