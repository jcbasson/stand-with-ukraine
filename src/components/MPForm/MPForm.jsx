import React, { useEffect } from "react";
import {
  Button,
  FormLabel,
  FormErrorMessage,
  Box,
  FormControl,
  Checkbox,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { usePostMPInteraction } from "../../hooks/usePostMPInteraction";
import MPs from "../../data/mps.json";
import Typeahead from "../UI/Typeahead";

const MPForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      hasResponded: false,
      hasMetWith: false,
    },
  });
  const { isSuccess, isPending, postMPInteraction, isError } =
    usePostMPInteraction();
  const toast = useToast();

  const onSubmit = ({
    mpName,
    hasResponded,
    hasMetWith,
    standsWithUkraine,
  }) => {
    postMPInteraction({
      mpName,
      hasResponded,
      hasMetWith,
      standsWithUkraine,
    });
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: `Sorry we are unable to record your interaction now, please try again later.`,
        status: "error",
        isClosable: true,
      });
    }

    if (isSuccess) {
      toast({
        title: `We've recorded your interaction. Thanks a lot!`,
        status: "success",
        isClosable: true,
      });
      reset({
        mpName: null,
        hasResponded: false,
        hasMetWith: false,
        standsWithUkraine: null,
      });
    }
  }, [isError, isSuccess, reset]);

  return isPending ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Spinner color="yellow.500" size="xl" />
    </Box>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
      }}
    >
      <Box display="flex" flexDirection="column" gap="16px">
        <FormControl
          isInvalid={errors.mpName}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <FormLabel variant="fieldLabel" htmlFor="mpName">
            Your MP
          </FormLabel>
          <Controller
            name="mpName"
            control={control}
            rules={{
              required: "This field is required",
              validate: (value) =>
                MPs.includes(value) || "Please select a valid MP",
            }}
            render={({ field, value, fieldState: { error } }) => (
              <Typeahead
                {...field}
                value={value}
                suggestions={MPs}
                error={error}
              />
            )}
          />
          <FormErrorMessage>
            {errors.mpName && errors.mpName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <FormLabel variant="fieldLabel" htmlFor="hasResponded">
            Has your MP responded?
          </FormLabel>
          <Controller
            name="hasResponded"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Checkbox
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                isChecked={value}
                ref={ref}
                size="lg"
                value={false}
              />
            )}
          />
        </FormControl>

        <FormControl
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <FormLabel variant="fieldLabel" htmlFor="hasMetWith">
            Have you met with your MP?
          </FormLabel>
          <Controller
            name="hasMetWith"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Checkbox
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                isChecked={value}
                ref={ref}
                size="lg"
                value={false}
              />
            )}
          />
        </FormControl>

        <FormControl
          isInvalid={errors.standsWithUkraine}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <FormLabel variant="fieldLabel" htmlFor="standsWithUkraine">
            Do they stand with Ukraine?
          </FormLabel>
          <Controller
            name="standsWithUkraine"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field, value }) => (
              <Select
                {...field}
                placeholder="Select option"
                borderColor="#3d65b4"
                value={value}
              >
                <option value="Undetermined">Undetermined</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            )}
          />
          <FormErrorMessage>
            {errors.standsWithUkraine && errors.standsWithUkraine.message}
          </FormErrorMessage>
        </FormControl>
      </Box>

      <Button
        type="submit"
        variant="primary"
        width="100%"
        justifySelf="flex-end"
      >
        Submit
      </Button>
    </form>
  );
};

export default MPForm;
