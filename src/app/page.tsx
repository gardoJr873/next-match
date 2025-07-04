
import { Button } from "@heroui/button";
import Link from 'next/link'


export default function HomePage() {

  return (
    <div className={'flex items-center justify-center flex-col p-4'}>
      <p className={'text-2xl text-wrap'}>
        Next.js Full Stack App
      </p>
      <Button
        as={Link}
        href={'/members'}
        color={'primary'}
        variant={'ghost'}
        startContent={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
          </svg>
        }
      >
        Click Me!
      </Button>
    </div>
  );
}
