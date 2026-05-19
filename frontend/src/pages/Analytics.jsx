import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {

  const data = [
    { day:"Mon", incidents:12 },
    { day:"Tue", incidents:20 },
    { day:"Wed", incidents:15 },
    { day:"Thu", incidents:28 },
    { day:"Fri", incidents:35 },
  ];

  return (
    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 p-10 w-full">

        <h1 className="text-5xl font-bold mb-10">
          Analytics Dashboard
        </h1>

        <div className="glass p-10 rounded-2xl">

          <h2 className="text-2xl mb-5">
            Emergency Trends
          </h2>

          <ResponsiveContainer
            width="100%"
            height={400}
          >

            <LineChart data={data}>

              <Line
                type="monotone"
                dataKey="incidents"
                stroke="#ff3b3b"
                strokeWidth={4}
              />

              <CartesianGrid stroke="#333" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}