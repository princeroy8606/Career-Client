import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./Pages/Career";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Career />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
