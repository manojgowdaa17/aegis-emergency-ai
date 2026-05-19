import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ReportEmergency from "./pages/ReportEmergency";
import CrisisMap from "./pages/CrisisMap";
import AIPage from "./pages/AIPage";
import Volunteers from "./pages/Volunteers";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";
import { Toaster } from "react-hot-toast";
import MyRequests from "./pages/MyRequests";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<ReportEmergency />} />
        <Route path="/requests" element={<MyRequests />} />
        <Route path="/map" element={<CrisisMap />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;