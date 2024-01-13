import Routes from "./Routes";
import Setup from "./Setup";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
  return (
    <Setup>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </Setup>
  );
};

export default App;
