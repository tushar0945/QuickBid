const StatCard = ({ value, label, description, icon, color }) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow border-t-4 ${color}`}>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs mt-1">{description}</div>
      <div className="text-right text-2xl mt-2">{icon}</div>
    </div>
  );
};

export default StatCard;
