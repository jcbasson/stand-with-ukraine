import React from "react";
import {
  Button,
  FormLabel,
  FormErrorMessage,
  Box,
  FormControl,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MPs from "../../data/mps.json";
import Typeahead from "../UI/Typeahead";

const MPForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hasResponded: false,
      hasMetWith: false,
    },
  });

  const onSubmit = ({
    mpName,
    hasResponded,
    hasMetWith,
    standsWithUKraine,
  }) => {
    console.log(
      "JC data mpName, hasResponded, hasMetWith, standsWithUKraine  = ",
      mpName,
      hasResponded,
      hasMetWith,
      standsWithUKraine
    );
  };

  return (
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
            render={({ field, fieldState: { error } }) => (
              <Typeahead {...field} suggestions={MPs} error={error} />
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
          isInvalid={errors.standsWithUKraine}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <FormLabel variant="fieldLabel" htmlFor="standsWithUKraine">
            Do they stand with Ukraine?
          </FormLabel>
          <Controller
            name="standsWithUKraine"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select option"
                borderColor="#3d65b4"
              >
                <option value="Undetermined">Undetermined</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            )}
          />
          <FormErrorMessage>
            {errors.standsWithUKraine && errors.standsWithUKraine.message}
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
