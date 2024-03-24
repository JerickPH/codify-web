import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  path: string;
  label: string;
  icon?: React.ComponentType<any>;
}

function LeftSidebarMenu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <nav className="left-sidebar-menu">
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.path}>
            <Link to={menuItem.path}>
              {menuItem.icon && <menuItem.icon />} {/* For the ICON*/}
              <span>{menuItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftSidebarMenu;
