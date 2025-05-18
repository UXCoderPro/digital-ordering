import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navItems } from "./navConfig";
import { useNav } from "../../context/NavContext";
import useScrollDirection from "./useScrollDirection";

export default function Navbar() {
  const location = useLocation();
  const scrollDir = useScrollDirection();
  const { activeRoute, setActiveRoute } = useNav();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location, setActiveRoute]);

  return (
    <div
      className={`fixed bottom-10  w-full flex flex-col items-center gap-2 z-50 transition-transform duration-300 ${
        scrollDir === "down" ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="w-11/12 px-2 py-3 shadow-md bg-white border border-border rounded-lg flex items-center justify-between transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeRoute === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full flex flex-col items-center gap-1 text-xs font-sfDisplay font-medium leading-normal ${
                isActive
                  ? "border-b-2 border-primary mb-2 text-primary"
                  : "border-b-0 border-transparent text-textDark"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
