import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import DefaultLayout from "./layouts/DefaultLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </QueryClientProvider>
  );
};

export default App;
