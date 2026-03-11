import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import SpotTheFake from "./pages/SpotTheFake";
import DifferentSpin from "./pages/DifferentSpin";
import SourceChecking from "./pages/SourceChecking";
import AiTextDetection from "./pages/AiTextDetection";
import AiImageDetection from "./pages/AiImageDetection";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spot-the-fake" element={<SpotTheFake />} />
          <Route path="/different-spin" element={<DifferentSpin />} />
          <Route path="/source-checking" element={<SourceChecking />} />
          <Route path="/ai-text" element={<AiTextDetection />} />
          <Route path="/ai-image" element={<AiImageDetection />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;