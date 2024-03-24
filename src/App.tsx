import React from 'react';

const menuItems = [
  { path: '/', label: 'Home'},
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function App() {
  return (
    <div className="app-container">
      {/* Your other components and content */}
      <nav className="menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.path}>{item.label}</a> {               
              }
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
