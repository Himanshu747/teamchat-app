import React, { useState } from "react";
interface SidebarNavItem {
  id: number;
  name: string;
  className?: string;
}
interface TabProps {
  sidebarNav: SidebarNavItem;
  onClick: () => void;
  isActive: boolean;
}
const Tab: React.FC<TabProps> = ({ sidebarNav, onClick, isActive }) => (
  <>
    <li key={sidebarNav.id} className="flex-grow lg:flex-grow-0">
      <button
        onClick={onClick}
        id="default-tab"
        className={`tab-button flex relative items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg cursor-pointer ${
          isActive ? "active" : ""
        }`}
      >
        <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
          <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
            {sidebarNav.name}
          </span>
        </div>
        <i className={`text-2xl ${sidebarNav.className}`}></i>
      </button>
    </li>
  </>
);

export default Tab;
