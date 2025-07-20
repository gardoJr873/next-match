'use client'

import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button
  } from "@heroui/react";
import { GiPadlock } from "react-icons/gi";


function LoginForm() {
  return (
    // Card - Main component to display a card
    <Card className={'w-2/5 mx-auto'}>
      {/* CardHeader - Used for the title */}
      <CardHeader className={'flex flex-col items-center justify-center'}>
        <div className={'flex flex-col gap-2 items-center text-secondary'}>
          <div className={'flex flex-row items-center gap-3'}>
            <GiPadlock size={30}/>
            <h1 className={'text-3xl font-semibold'}>Login</h1>
          </div>
          <p className={'text-neutral-500'}>Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      {/* CardBody - Contains content */}
      <CardBody>
        <form action="">
          <div className={'space-y-4'}>
            <Input
              label={'Email'}
              variant={"underlined"}
            >
            </Input>
            <Input
              label={'Password'}
              type={'password'}
              variant={'underlined'}
            >
            </Input>
            <Button fullWidth={true} type={'submit'} color={'secondary'}
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default LoginForm;