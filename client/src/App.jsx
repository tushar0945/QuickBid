import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import publicRoutes from "./routes/publicRoutes"; // ✅ Import your route list
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-green-700 text-white text-3xl p-10">
        Welcome on QuickBid!
      </div>

      {/* ✅ THIS PART WAS MISSING */}
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
