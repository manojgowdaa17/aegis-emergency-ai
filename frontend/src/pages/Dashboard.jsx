import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {

  return (

    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 p-10 w-full">

        <h1 className="text-5xl font-bold">
          Crisis Dashboard
        </h1>

        <p className="text-gray-400 mt-3">
          Real-time emergency monitoring system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

          <StatCard
            title="Active Emergencies"
            value="128"
            color="text-red-500"
          />

          <StatCard
            title="Volunteers Active"
            value="54"
            color="text-green-400"
          />

          <StatCard
            title="AI Accuracy"
            value="98%"
            color="text-blue-400"
          />

        </div>

        <div className="glass p-8 rounded-2xl mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Live Incident Feed
          </h2>

          <div className="space-y-4">

            <div className="bg-red-500/20 p-4 rounded-xl border border-red-500">
              Fire emergency reported in Bangalore
            </div>

            <div className="bg-yellow-500/20 p-4 rounded-xl border border-yellow-500">
              Flood alert in Chennai
            </div>

            <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-500">
              Medical emergency near airport
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}