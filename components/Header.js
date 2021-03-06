import React from 'react';
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
    const {data: session} = useSession();

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
                    <Image
                        src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src="https://links.papareact.com/jjm" layout="fill" objectFit="contain"
                    />
                </div>
                {/* middel */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md '>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-400'/>
                        </div>
                        <input type="text" placeholder='Search' className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'/>
                    </div>
                </div>
                {/* right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn'/>
                    <MenuIcon className='h-6 md:hidden cursor-pointer'/>

                    {session ? (
                        <>
                        <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-90'/>
                        <div className='absolute -top-2 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
                            4
                        </div>
                    </div>
                    <PlusCircleIcon className='navBtn'/>
                    <UserGroupIcon className='navBtn'/>
                    <HeartIcon className='navBtn'/>
                    <img onClick={signOut} src={session.user.image} alt='A' className='w-10 h-10 rounded-full cursor-pointer'/>
                        </>
                        
                    ) : ( 
                        <button onClick={signIn}>Sign In</button>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Header
