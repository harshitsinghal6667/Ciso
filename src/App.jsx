import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import DashboardCard from "./Components/Dashboardcards";
import ThreatMap from "./Components/ThreatMap";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Vulnerabilities from "./Pages/Vulnerabilities";
import IOCFeed from "./Pages/IOCFeed";
import Compliance from "./Pages/Compliance";
import Settings from "./Pages/Settings";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false); // Ensure we wait for auth check

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true);
    });
    return unsub;
  }, []);

  const handleLogout = () => signOut(auth);

  if (!authChecked) return null; // wait for auth state to be checked

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="*"
          element={
            user ? (
              <div className="flex h-screen">
                {isSidebarOpen && <Sidebar />}
                <div className="flex-1 flex flex-col">
                  <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} user={user} onLogout={handleLogout} />
                  <DashboardCard />
                  <ThreatMap />
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/Vulnerabilities" element={<Vulnerabilities />} />
                      <Route path="/IOCFeed" element={<IOCFeed />} />
                      <Route path="/Compliance" element={<Compliance />} />
                      <Route path="/Settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
