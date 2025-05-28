import React, { useState } from "react";
import Tab from "./Tab";
import { Sidebar, sidebarNav } from "./SidebarData/sidebar";
import Profile from "../../Profile/Profile";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);
  };

  return (
    <>
      <div data-theme-color="violet">
        <div className="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white dark:bg-zinc-600 ">
          <div className="w-full mx-auto lg:my-auto">
            <ul
              id="tabs"
              className="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs"
            >
              {sidebarNav.map((item) => (
                <Tab
                  key={item.id}
                  sidebarNav={item}
                  onClick={() => setActiveTab(item.id)}
                  isActive={activeTab === item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="chat-leftsidebar lg:w-[380px] group-data-[theme-color=violet]:bg-slate-50 group-data-[theme-color=green]:bg-green-50/20 group-data-[theme-color=red]:bg-red-50/20 shadow overflow-y-hidden mb-[80px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700">
        <div>
          <Profile activeTab={activeTab == 1 ? "active" : ""} />
        </div>
        Tab {activeTab} is Active
      </div>
    </>
  );
};

export default Tabs;
