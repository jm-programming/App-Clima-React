import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Navigation from "./components/Navigation";
import News from "./components/News";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
