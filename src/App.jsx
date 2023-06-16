import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import ProtectedRoutes from "./pages/nestedRoutes/ProtectedRoutes.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
