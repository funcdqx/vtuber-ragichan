import "./styles/App.css";
import "./styles/Library.css";
import "./styles/Animate.css";
import Home from "./components/Home";
import LastVideo from "./pages/LastVideo";
import PopulerVideo from "./pages/PopulerVideo";
import Gallery from "./pages/Gallery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/last-video" element={<LastVideo />} />
        <Route path="/populer-video" element={<PopulerVideo />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
