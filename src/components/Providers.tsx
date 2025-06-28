'use client';

import { HeroUIProvider } from '@heroui/system'
import * as React from "react";

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}