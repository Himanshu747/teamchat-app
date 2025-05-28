import React from "react";
import SidebarNavigation from "../Templates/Sidebar/SidebarNavigation";
import Tabs from "../Templates/Sidebar/Tabs";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="lg:flex">
        <Tabs />
      </div>
    </>
  );
};
export default Dashboard;
