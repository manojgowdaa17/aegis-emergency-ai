export default function StatCard({
  title,
  value,
  color,
}) {

  return (
    <div className="glass p-6 rounded-2xl">

      <h2 className="text-gray-400">
        {title}
      </h2>

      <h1
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </h1>

    </div>
  );
}