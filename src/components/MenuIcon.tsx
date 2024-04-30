import React from 'react';

// Define the props interface for the MenuIcon component
interface MenuIconProps {
  className?: string; // Optional className prop
}

// Define the MenuIcon component
const MenuIcon: React.FC<MenuIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Apply className to the SVG element
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      stroke="currentColor"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);

export default MenuIcon;
