"use client"

import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={`py-8 px-6 ${isHome ? "" : "bg-black"} flex items-center justify-between border-b-[1px] border-white/10`}
    >
      <MenuIcon className='stroke-white'/>
      <Logo />
      <ShoppingCartIcon className='stroke-white'/>
    </header>
  )
}
