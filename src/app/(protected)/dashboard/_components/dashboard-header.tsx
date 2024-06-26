'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import AccountDropdown from './dahsboard-header-account-dropdown'
import DashboardSidebarSheet from './dashboard-sidebar-sheet'

export default function DashboardHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 flex h-20 w-full justify-end border-b">
      <div className="relative flex h-full w-full items-center justify-between px-8 py-[1.25rem] lg:w-[calc(100vw-240px)]">
        <div className=" mr-4 flex items-center">
          <DashboardSidebarSheet />
          <div className="mr-2 hidden aspect-square h-10 w-10 items-center justify-center overflow-hidden rounded-md lg:flex">
            <Image
              src="/hotel.png"
              alt="Hotel Logo"
              width={80}
              height={80}
              quality={80}
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 240px"
              className="h-full w-full scale-150 object-cover"
            />
          </div>
          <div className="sr-only mr-2 flex flex-col lg:not-sr-only">
            <h3 className="pb-1 text-lg font-medium leading-tight">
              Big Makkah Hotel
            </h3>
            <span className="text-sm text-[#1B1B1B]">#10292827</span>
          </div>
          <div className="sr-only flex flex-col items-center lg:not-sr-only">
            <Button variant="link" size="sm" asChild>
              <Link href="#">See your property</Link>
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center justify-end lg:w-fit">
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 lg:w-min"
            containerClassName="mr-4"
            prefixNode={
              <div className="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3 text-gray-400">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
            }
          />
          <div className="sr-only sm:not-sr-only">
            <Button
              className={cn(
                'relative mr-2',
                "after:absolute after:right-0 after:top-0 after:z-20 after:mr-1.5 after:mt-[10px] after:size-1.5 after:rounded-full after:bg-red-600 after:content-['']"
              )}
              size="icon"
              variant="ghost"
            >
              <Bell size={15} />
            </Button>
          </div>
          <AccountDropdown />
        </div>
      </div>
    </header>
  )
}
