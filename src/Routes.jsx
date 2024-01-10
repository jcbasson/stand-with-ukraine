import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import RecordMpInteraction from "./pages/RecordMpInteraction";
import ThankYou from "./pages/ThankYou";

const paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecordMpInteraction />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default paths;
