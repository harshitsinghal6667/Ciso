import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white p-4 space-y-4">
      <div className="text-lg font-bold mb-6"><b>Chief Information Security Officer</b></div>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:bg-blue-700 p-2 rounded">Dashboard Overview</Link><br/>
        <Link to="/Vulnerabilities" className="hover:bg-blue-700 p-2 rounded">Vulnerability Management</Link><br/>
        <Link to="/IOCFeed" className="hover:bg-blue-700 p-2 rounded">IOC & IOA Feed</Link><br/>
        <Link to="/Compliance" className="hover:bg-blue-700 p-2 rounded">Compliance Reports</Link><br/>
        <Link to="/Settings" className="hover:bg-blue-700 p-2 rounded">Settings</Link><br/>
      </nav>
    </aside>
  );
}

export default Sidebar;