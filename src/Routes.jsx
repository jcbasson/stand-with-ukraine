import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import GenerateMessage from "./pages/GenerateMessage";
import ThankYou from "./pages/ThankYou";

const paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenerateMessage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default paths;
