import React from "react";
import { sidebarNav,Sidebar } from "./SidebarData/sidebar";
import Image from "../../UIComponents/Image/Image";
import Tabs from "./Tabs";


const SidebarNavigation: React.FC = () => {
    return (
        <>
            {/*Start left sidebar-menu */}
            <div className="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white dark:bg-zinc-600 ">
                
                {/*end navbar-brand-box */}
                {/*Start side-menu nav */}
                {/*  <!-- Tabs --> */}
                <div className="w-full mx-auto lg:my-auto">
                    <ul id="tabs" className="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs">
                        <Tabs/>
                    </ul>
                </div>

                <div className="w-20 my-5 lg:w-auto">
                    <ul className="lg:block">
                        <li className="hidden text-center light-dark-mode nav-item lg:block">
                            <a href="#" className="hidden dark:block dark:text-violet-100/80">
                                <i className="text-2xl ri-sun-line "></i>
                            </a>
                            <a href="#" className="block text-gray-500 dark:hidden">
                                <i className="text-2xl ri-moon-clear-line"></i>
                            </a>
                        </li>

                        <li className="relative lg:mt-4 dropdown lg:dropup">
                            <a href="#" className="dropdown-toggle" id="dropdownButton2" data-bs-toggle="dropdown">
                                <Image src="assets/images/avatar-1.jpg" alt="" className="w-10 h-10 p-1 mx-auto rounded-full bg-gray-50 dark:bg-zinc-700"/>
                               
                            </a>

                            <ul className="absolute z-40 hidden float-left w-40 py-2 mx-4 mb-12 text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownButton2">
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="#">Profile <i className="text-gray-500 rtl:float-left ltr:float-right ri-profile-line text-16"></i></a>
                                </li>
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="#">Setting <i className="text-gray-500 rtl:float-left ltr:float-right ri-settings-3-line text-16"></i></a>
                                </li>
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="auth-lock-screen.html">Lock Screen <i className="text-gray-500 rtl:float-left ltr:float-right ri-git-repository-private-line text-16"></i></a>
                                </li>
                                <li className="my-2 border-b border-gray-100/20"></li>
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="auth-login.html">Log out <i className="text-gray-500 rtl:float-left ltr:float-right ri-logout-circle-r-line text-16"></i></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/*end left sidebar-menu */}
        </>
    );
}
export default SidebarNavigation;