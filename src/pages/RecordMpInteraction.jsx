import { Box, Text } from "@chakra-ui/react";
import MPForm from "../components/MPForm";
import InteractionChart from "../components/InteractionChart";

const RecordMpInteraction = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="24px"
      height="100%"
      width="100%"
    >
      <Text as="h1" variant="title">
        Record your local MP interaction
      </Text>
      <InteractionChart />
      <MPForm />
    </Box>
  );
};

export default RecordMpInteraction;
