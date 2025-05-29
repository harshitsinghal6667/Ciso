function Vulnerabilities() {
  return (
    <section className="w-full min-h-screen px-4 py-6 lg:px-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
        Vulnerability Management
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}

export default Vulnerabilities;
