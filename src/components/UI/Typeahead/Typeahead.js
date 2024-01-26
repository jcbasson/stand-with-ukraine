import React, { useState } from "react";
import { Box, List, ListItem, Input } from "@chakra-ui/react";

const Typeahead = ({ onChange, value, suggestions, error, ...props }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue); // Update form value

    // Filter suggestions based on the input
    if (inputValue) {
      const newFilteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(newFilteredSuggestions);
      setIsSuggestionsVisible(true);
    } else {
      setIsSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion); // Update form value
    setIsSuggestionsVisible(false); // Hide suggestions
  };

  return (
    <Box position="relative">
      <Input
        value={value}
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
          position="absolute" // Position list absolutely
          zIndex="10" // Ensure it stacks on top of other content
          w="100%" // List width matches the Input width
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
