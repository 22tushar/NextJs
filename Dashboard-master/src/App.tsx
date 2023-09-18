import HomePage from "./Pages/HomePage";
import PiePage from "./Pages/PiePage";
import TablePage from "./Pages/TablePage";
import { Routes, Route } from "react-router-dom";
import LinePage from "./Pages/LinePage";
import SettingPage from "./Pages/SettingPage";
import "../src/index.css";
import { useEffect } from "react";
import BarPage from "./Pages/BarPage";

function App() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/piechart" element={<PiePage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/barchart" element={<BarPage />} />
        <Route path="/linechart" element={<LinePage />} />
        <Route path="/barchart" element={<BarPage />} />
      </Routes>
    </>
  );
}
export default App;
