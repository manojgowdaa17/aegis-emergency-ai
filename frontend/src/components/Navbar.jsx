import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 glass">
      <h1 className="text-2xl font-bold text-red-500">
        AegisAI
      </h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/map">Map</Link>
        <Link to="/ai">AI Assistant</Link>
      </div>
    </div>
  );
}