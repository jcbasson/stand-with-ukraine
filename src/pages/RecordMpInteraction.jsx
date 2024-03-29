import { Box, Text } from "@chakra-ui/react";
import MPForm from "../components/MPForm";
import InteractionChart from "../components/InteractionChart";
import { useGetMPInteraction } from "../hooks/useGetMPInteraction";

const RecordMpInteraction = () => {
  const { data, isSuccess, fetchMPs } = useGetMPInteraction();

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
      {isSuccess && data && <InteractionChart data={data} />}
      <MPForm onSubmitSuccess={fetchMPs} />
    </Box>
  );
};

export default RecordMpInteraction;
