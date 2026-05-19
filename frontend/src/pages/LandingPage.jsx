import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">

        <motion.h1
          initial={{ opacity:0, y:-50 }}
          animate={{ opacity:1, y:0 }}
          className="text-6xl font-bold"
        >
          AI Emergency Response Platform
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-2xl">
          Real-time crisis intelligence powered by AI,
          maps, analytics, and emergency coordination.
        </p>

        <div className="flex gap-5 mt-10">
          <Link
            to="/report"
            className="bg-red-500 px-6 py-3 rounded-xl"
          >
            Report Emergency
          </Link>

          <Link
            to="/dashboard"
            className="glass px-6 py-3 rounded-xl"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}