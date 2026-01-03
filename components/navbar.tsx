// imports
import Image from 'next/image';
import Link from 'next/link';
import { SiConvertio } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';
import { LuMenu } from 'react-icons/lu';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

export default function Navbar({ }): any {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <SiConvertio className="w-40 cursor-pointer dark:invert" size={40} />
      </Link>
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <div className="items-center hidden gap-2 md:flex">
        <ModeToggle />
        <Link href="https://startuppitch-pk7g38l7p-my-team-58e3ebda.vercel.app">
          <Button
            variant="default"
            className="items-center hidden gap-2 bg-orange-600 rounded-full w-fit md:flex"
            size="lg"
          >
            <span>Check it up our startup forum!</span>
            <span className="text-xl">
              <Image
                src="/images/hakkinda.png"
                alt="Hakkinda"
                width={20} // text-xl ile uyumlu, gerektiğinde ayarlayın
                height={20} // kare görsel varsayıyorum, orijinal boyutlara göre değiştirin
                className="object-contain"
              />
            </span>
          </Button>
        </Link>
      </div>
      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <LuMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                <SheetTrigger asChild>
                  <Link href="/">
                    <Button variant="link" className="w-full font-semibold text-md">
                      Home
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/about">
                    <Button variant="link" className="w-full font-semibold text-md">
                      About
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/privacy-policy">
                    <Button variant="link" className="w-full font-semibold text-md">
                      Privacy Policy
                    </Button>
                  </Link>
                </SheetTrigger>
                <ModeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
