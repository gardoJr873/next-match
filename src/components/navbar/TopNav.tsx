"use client"

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent} from "@heroui/react";
import Link from "next/link";
import {Button} from "@heroui/button";
import NavLink from "@/components/navbar/NavLink";

function TopNav() {
  return (
    // Navbar > the main component of the navbar
    <Navbar
      maxWidth={'xl'}
      className={'bg-gradient-to-r from-purple-400 to-purple-700'}
      classNames={{
        item:[
          'text-lg',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200'
        ]
      }}
    >
      {/*NavbarBrand > the component for branding*/}
      <NavbarBrand
      as={Link}
      href={'/'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200 size-14">
          <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        <div className={'flex text-3xl font-bold'}>
          <span className={'text-gray-900'}>Next</span>
          <span className={'text-gray-200'}>Match</span>
        </div>
      </NavbarBrand>
      {/*NavbarContent > the component for wrapping navbar items*/}
      <NavbarContent justify={"center"}>
        {/*NavbarItem component, now NavLink custom component > the component for navbar item*/}
        <NavLink href={'/members'} label={'Matches'} />
        <NavLink href={'/lists'} label={'Lists'} />
        <NavLink href={'/messages'} label={'Messages'} />
      </NavbarContent>
      <NavbarContent justify={"end"}>
        <Button
          as={Link}
          href={'/login'}
          className={'text-white bg-gradient-to-tr to-violet-500 from-fuchsia-400 shadow-md shadow-fuchsia-800 border-blue-grey-10 border '}
        >
          Login
        </Button>
        <Button
          as={Link}
          href={'/register'}
          className={'text-white bg-gradient-to-tr to-violet-500 from-fuchsia-400 shadow-md shadow-fuchsia-800 border-blue-grey-10 border'}
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

export default TopNav;