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
    <Card className={'max-w-[400px]'}>
      <CardHeader>

      </CardHeader>
        <Divider/>
          <CardBody>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                <Divider/>
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
                <Divider/>
                <Input
                >
                </Input>
              </form>
            </div>
          </CardBody>
        <Divider/>
          <Button>
            Register
          </Button>
    </Card>
  );
}

export default RegisterForm;