import { Menu, LogOut } from "lucide-react";

function Header({ toggleSidebar, user, onLogout }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">CISO Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm">{user?.displayName || user?.email}</span>
        <img
          src={user.photoURL || "https://ui-avatars.com/api/?name=User"}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <button onClick={onLogout}>
          <LogOut className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </header>
  );
}

export default Header;
