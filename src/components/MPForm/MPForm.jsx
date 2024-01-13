import React from "react";
import { Button, FormLabel, Box } from "@chakra-ui/react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import MPs from "../../data/mps.json";
import Typeahead from "../UI/Typeahead";

const MPForm = () => {
  const navigate = useNavigate();
  const formMethods = useForm({
    defaultValues: {
      mpName: "", // Add default value for the Typeahead component
    },
  });

  const onSubmit = (data) => {};

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <Box display="flex" flexDirection="column" gap="8px">
          <FormLabel variant="fieldLabel" htmlFor="mpName">
            Your MP
          </FormLabel>
          <Controller
            name="mpName"
            control={formMethods.control}
            render={({ field }) => <Typeahead {...field} suggestions={MPs} />}
          />
        </Box>

        <Button
          type="submit"
          backgroundColor="#3d65b4"
          fontWeight="400"
          fontSize="1rem"
          borderRadius="2px"
          height="12px"
          width="100%"
          justifySelf="flex-end"
        >
          Send my email
        </Button>
      </form>
    </FormProvider>
  );
};

export default MPForm;
