import React from "react";
import Image from "../UIComponents/Image/Image";

interface groupProps {
    activeTab: string;
}
const Group: React.FC<groupProps> = ({ activeTab }) => {

    return (
        <>
            <div className={`tab-content ${activeTab}`}>
               
                <div className="h-screen lg:h-auto">
                    <div className="p-6">
                        <div className="ltr:float-right rtl:float-left">
                            <div className="relative">
                             
                                <button type="button" className="px-4 text-lg text-gray-500 group/tag dark:text-gray-300" data-tw-toggle="modal" data-tw-target="#modal-id">
                                    <i className="ri-group-line me-1 ms-0"></i>
                                    <span className="absolute items-center hidden mb-6 top-8 group-hover/tag:flex ltr:-left-8 rtl:-right-8">
                                        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Create groups</span>
                                        <span className="w-3 h-3 -mt-6 rotate-45 bg-black ltr:-ml-12 rtl:-mr-12"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <h4 className="mb-6 dark:text-gray-50">Groups</h4>

                         {/* <div className="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                            <span className="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 pe-1 ps-3 " id="basic-addon2">
                                <i className="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
                            </span>
                            <input type="text" className="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 dark:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon2">
                        </div> */}

                        <div className="chat-message-list chat-group-list" data-simplebar>
                        
                        
                            <ul>
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        G
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#General</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        R
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Reporting <span className="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">+23</span></h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        D
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Designers</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        D
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Developers <span className="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">New</span></h5>
                                            </div>
                                        </div>
                        
                                    </a>
                                </li>
                        
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        P
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Project-alpha</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        
                                <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="ltr:mr-5 rtl:ml-5">
                                                <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                    <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                        B
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Snacks</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                     
                        </div>
                        </div>
                        </div>
                        
          
        </>
    );
}
export default Group;