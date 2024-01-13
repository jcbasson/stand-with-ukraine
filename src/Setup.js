import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import theme from "./assets/theme";

const generateQueryClient = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.error(
          `StandWithUkraine: ${error?.message ? error.message : error}`
        );
      },
    }),
  });

  return queryClient;
};

const Setup = ({ children }) => {
  const queryClient = generateQueryClient();
  const [resetErrorBoundary, setResetErrorBoundary] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ErrorBoundary
          FallbackComponent={() => {}}
          onReset={() => {
            setResetErrorBoundary((key) => !key);
          }}
          resetKeys={[resetErrorBoundary]}
          onError={() => {
            console.error("StandWithUkraine: Error initializing");
          }}
        >
          {children}
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Setup;
