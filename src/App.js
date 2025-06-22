import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import About from "./components/About";
import Project from "./components/Project";
import Career from "./components/Career";
import Service from "./components/Service";
import Contect from "./components/Contect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contect" element={<Contect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
