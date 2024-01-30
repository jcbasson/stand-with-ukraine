import React, { useState, useEffect } from "react";
import { Box, List, ListItem, Input } from "@chakra-ui/react";

const Typeahead = ({ onChange, value, suggestions, error, ...props }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  useEffect(() => {
    // Update the internal state when the external value changes
    setInputValue(value || "");
  }, [value]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); // Update internal state
    onChange(newValue); // Update form value (react-hook-form)

    if (newValue) {
      const newFilteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredSuggestions(newFilteredSuggestions);
      setIsSuggestionsVisible(true);
    } else {
      setIsSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // Update internal state
    onChange(suggestion); // Update form value (react-hook-form)
    setIsSuggestionsVisible(false); // Hide suggestions
  };

  return (
    <Box position="relative">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsSuggestionsVisible(true)}
        style={
          error
            ? { borderColor: "red", boxShadow: "0 0 0 1px red" }
            : { border: "1px solid #3d65b4" }
        }
        {...props}
      />
      {isSuggestionsVisible && (
        <List
          position="absolute"
          zIndex="10"
          w="100%"
          boxShadow="md"
          bg="white"
          maxH="200px"
          overflowY="auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              p={2}
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Typeahead;
