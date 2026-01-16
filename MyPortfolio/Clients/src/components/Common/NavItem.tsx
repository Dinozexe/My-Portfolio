import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface NavItemProps {
  to: string;
  label: string;
  icon?: ReactNode;
}

const NavItem = ({ to, label, icon }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        flex items-center gap-2
        hover:text-blue-500 transition
        ${isActive ? "text-blue-500 font-semibold" : ""}
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
