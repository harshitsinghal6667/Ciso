import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Vulnerabilities from "./Pages/Vulnerabilities";
import IOCFeed from "./Pages/IOCFeed";
import Compliance from "./Pages/Compliance";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";


function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Vulnerabilities" element={<Vulnerabilities />} />
      <Route path="/IOCFeed" element={<IOCFeed />} />
      <Route path="/Compliance" element={<Compliance />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Login" element={<Login/>}/>
      
    </Routes>
  );
}

export default RoutesList;