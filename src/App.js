import DefaultLayouts from "./layouts/DefaultLayouts";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayouts>
        <Routes />
      </DefaultLayouts>
    </QueryClientProvider>
  );
};

export default App;
