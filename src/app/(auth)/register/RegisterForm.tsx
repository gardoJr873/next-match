'use client'

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Input,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiUserPlusBold } from "react-icons/pi";


function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({resolver: zodResolver(registerSchema)})
  const onSubmit = ((data: RegisterSchema) => {
    console.log(data)
  })

  return (
    <Card className={'w-2/5 mx-auto'}>
      <CardHeader className={'flex flex-col items-center justify-center'}>
        <div className={'flex flex-col gap-2 items-center text-gray-500'}>
          <div className={'flex flex-row items-center gap-3'}>
            <PiUserPlusBold size={30}/>
            <h1 className={'text-3xl font-semibold'}>Register</h1>
          </div>
          <p className={'text-neutral-500'}>Welcome to NextMatch</p>
        </div>
      </CardHeader>
        <Divider/>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={'space-y-4'}>
                <Input
                  isClearable={true}
                  defaultValue={''}
                  placeholder={'Enter your name'}
                  autoComplete={'on'}
                  label={'Name'}
                  variant={'underlined'}
                  {...register('name')}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                >
                </Input>
                <Input
                  isClearable={true}
                  defaultValue={''}
                  placeholder={'Enter your email'}
                  autoComplete={'on'}
                  label={'Email'}
                  variant={'underlined'}
                  {...register("email")}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                >
                </Input>
                <Input
                  isClearable={true}
                  defaultValue={''}
                  placeholder={'Create password'}
                  label={'Password'}
                  variant={'underlined'}
                  autoComplete={'new-password'}
                  errorMessage={errors.password?.message}
                >
                </Input>
                <Button
                  fullWidth={true}
                  type={'submit'}
                  color={'secondary'}
                >
                  Register
                </Button>
              </div>
            </form>
          </CardBody>
    </Card>
  );
}

export default RegisterForm;