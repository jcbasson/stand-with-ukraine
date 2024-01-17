import React, { useState } from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import Input from "../Input";

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
    <Box>
      <Input
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsSuggestionsVisible(true)}
        style={error ? { borderColor: "red", boxShadow: "0 0 0 1px red" } : {}}
        {...props}
      />
      {isSuggestionsVisible && (
        <List boxShadow="md" bg="white" maxH="200px" overflowY="auto">
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
