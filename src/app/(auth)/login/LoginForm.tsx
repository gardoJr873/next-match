'use client'

import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button
  } from "@heroui/react";
import React from 'react';
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), mode: "onTouched" });
  const onSubmit = ((data: LoginSchema) => {
    console.log(data)
  })

  return (
    // Card - Main component to display a card
    <Card className={'w-2/5 mx-auto'}>
      {/* CardHeader - Used for the title */}
      <CardHeader className={'flex flex-col items-center justify-center'}>
        <div className={'flex flex-col gap-2 items-center text-gray-500'}>
          <div className={'flex flex-row items-center gap-3'}>
            <GiPadlock size={30}/>
            <h1 className={'text-3xl font-semibold'}>Login</h1>
          </div>
          <p className={'text-neutral-500'}>Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      {/* CardBody - Contains content */}
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'space-y-4'}>
            <Input
              isClearable={true}
              defaultValue={''}
              placeholder={'Enter you email'}
              autoComplete={'on'}
              label={'Email'}
              variant={"underlined"}
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            >
            </Input>
            <Input
              isClearable={true}
              defaultValue={''}
              placeholder={'Enter your password'}
              autoComplete={'on'}
              label={'Password'}
              type={'password'}
              variant={'underlined'}
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            >
            </Input>
            <Button
              fullWidth={true}
              type={'submit'}
              color={'secondary'}
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