import Link from 'next/link'
import { auth } from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { async } from '@firebase/util';

function SideNavbar() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('/auth/Login');
    }; 
    useEffect(() => {
        getData();
    }, [user, loading]);

    return (
  
        <div className="">
            {user && (   
                <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                    <GiHamburgerMenu
                        className="block md:hidden h-6 w-6 text-white mt-14"
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <div className="p-6 w-1/2 h-screen bg-black border-r-[0.1px] ml-4 border-slate-700 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start item-center">
                        <h1 className="text-xl text-center cursor-pointer font-extralight text-cyan-400 border-b border-gray-100 pb-4 w-full">
                            Virtual Dashboard
                        </h1>
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSpaceDashboard className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                            
                                <Link href={"/"}>
                                <button className="text-base text-white group-hover:text-white font-semibold ">
                                    Dashboard
                                </button>
                            </Link>    
                            </div>
                            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <BiMessageSquareDots className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <Link href={"/Post"}>
                                    <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                        Tweet Your Thoughts
                                    </h3>
                                </Link>
                            </div>
                            {/* <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <CgProfile className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <Link href={"/Dashboard"}>
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    Profile
                                </h3>
                                </Link>   

                            </div> */}
                            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <FaRegComments className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    Comments
                                </h3>
                            </div>
                            {/* <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineAnalytics className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    Analytics
                                </h3>
                            </div> */}
                          
                            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineIntegrationInstructions className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <Link href={"/Dashboard"}>
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    Edit Your Twitts
                                </h3>
                                </Link>
                            </div>
                        </div>
                        
                        {/* setting  */}
                        
                        <div className="  border-b border-gray-100 pb-4">
                            <div className="flex justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <CgProfile className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                {/* {user && ( */}
                                    
                                    <Link href={"/Dashboard"}>
                                    <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                        Profile
                                    </h3>
                                </Link>
                                {/* )} */}


                            </div>
                            {/* <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    Settings
                                </h3>
                            </div>
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineMoreHoriz className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    More
                                </h3>
                            </div> */}
                        </div>
                        {/* logout */}
                        <div className=" mt-10">
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineLogout className="text-2xl text-[#1D9BF0] group-hover:text-white " />
                                <button  className="text-base text-white group-hover:text-white font-semibold " onClick={() => auth.signOut()}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
            )}
        </div>
    );
}

export default SideNavbar;