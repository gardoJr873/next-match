"use client"

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent} from "@heroui/react";
import Link from "next/link";
import {Button} from "@heroui/button";
import NavLink from "@/components/navbar/NavLink";
import { GiMatchHead } from "react-icons/gi";

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
        <GiMatchHead
          className={'h-14 w-11 rotate-45'}
        />
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
          className={'text-white bg-gradient-to-tr to-violet-500 from-fuchsia-400 shadow-md shadow-fuchsia-800 border rounded-md'}
        >
          Login
        </Button>
        <Button
          as={Link}
          href={'/register'}
          className={'text-white bg-gradient-to-tr to-violet-500 from-fuchsia-400 shadow-md shadow-fuchsia-800 border rounded-md'}
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

export default TopNav;