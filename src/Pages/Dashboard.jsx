import React from "react";
import ThreatMap from "../Components/ThreatMap";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Vulnerability Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Vulnerability Management</h2>
        <div className="grid grid-cols-3 gap-6">

          {/* Vulnerability Summary */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Vulnerability Summary</h3>
            {['Critical', 'High', 'Medium', 'Low'].map((level) => (
              <div key={level} className="mb-3">
                <div className="text-sm font-medium mb-1">{level}</div>
                <div className="h-3 bg-gray-300 rounded w-full" />
              </div>
            ))}
          </div>

          {/* Top Vulnerable Assets */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Top Vulnerable Assets</h3>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Asset</th>
                  <th className="text-left">Vulnerabilities</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, i) => (
                  <tr key={i}>
                    <td className="py-1">Asset {i + 1}</td>
                    <td className="py-1">XX</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Patch Status */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Patch Status</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-3">
                <div className="h-3 bg-gray-300 rounded w-full" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IOC & IOA Feed Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">IOC & IOA Feed</h2>
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Real-Time Threat Feed */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Real-Time Threat Feed</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {[...Array(4)].map((_, i) => <li key={i}>Threat feed item {i + 1}</li>)}
            </ul>
          </div>

          {/* Threat Map */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Threat Map</h3>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-500">
              <ThreatMap/>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Alerts</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {[...Array(4)].map((_, i) => <li key={i}>Alert {i + 1}</li>)}
            </ul>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {/* Regulatory Compliance-Status */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Regulatory Compliance-Status</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-3">
                <div className="h-3 bg-gray-300 rounded w-full" />
              </div>
            ))}
          </div>

          {/* Audit Logs */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Audit Logs</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {[...Array(4)].map((_, i) => <li key={i}>Audit log entry {i + 1}</li>)}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Dashboard;
