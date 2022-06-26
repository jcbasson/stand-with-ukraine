import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactCandidates from "./pages/ContactCandidates";
import Error from "./pages/Error";
import ThankYou from "./pages/ThankYou";

const paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactCandidates />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default paths;
