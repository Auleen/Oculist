import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Search from "./components/report/report";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Database from "./components/database/db";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route path="/Report" element={<Search />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
