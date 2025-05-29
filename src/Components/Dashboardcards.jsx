import React from 'react';
import { ArrowUpRight, AlertTriangle, ShieldCheck } from 'lucide-react'; // optional icons

const iconMap = {
  alert: <AlertTriangle className="text-red-500 w-6 h-6" />,
  compliance: <ShieldCheck className="text-green-500 w-6 h-6" />,
  default: <ArrowUpRight className="text-blue-500 w-6 h-6" />,
};

const DashboardCard = ({ title = "Cheif Information Security Officer", value = "Details", description = "", iconType = "default", bg = "bg-white" }) => {
  return (
    <div className={`rounded-2xl shadow-md p-5 flex items-center justify-between ${bg}`}>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
      </div>
      <div className="ml-4">
        {iconMap[iconType] || iconMap["default"]}
      </div>
    </div>
  );
};

export default DashboardCard;
