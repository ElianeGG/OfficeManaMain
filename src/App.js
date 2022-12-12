import "./App.css";
import MainPage from "./pages/MainPage";
import Tasks from "./pages/Tasks";
import Payments from "./pages/Payments";
import Suppliers from "./pages/Suppliers";
import Employees from "./pages/Employee";
import TimeReport from "./pages/TimeReport";
import CibusSodexo from "./pages/CibusSodexo";
import Reports from "./pages/Reports";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Payments />} />
        <Route path="/" element={<Suppliers />} />
        <Route path="/" element={<Employees />} />
        <Route path="/" element={<TimeReport />} />
        <Route path="/" element={<CibusSodexo />} />
        <Route path="/" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
