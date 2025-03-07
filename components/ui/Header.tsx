"use client"

import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Headphones', href: '/headphones' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Earphones', href: '/earphones' },
]

function NavLinks () {
  return (
    <ul className='hidden lg:flex gap-[34px]'>
      {LINKS.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={`text-white font-bold text-[13px] leading-[25px] tracking-[2px] uppercase hover:text-brown transition duration-300`}
        >
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={`
        ${isHome ? "" : "bg-black"} 
      `}
    >
      <div
        className={`
          py-8 px-6 md:px-10
          flex items-center justify-between md:justify-start md:gap-[42px] xl:gap-[197px]
          border-b-[1px] border-white/10
          xl:px-0 xl:max-w-[1100px] xl:mx-auto
        `}
      >
        <MenuIcon className='stroke-white lg:hidden'/>
        <Logo />
        <NavLinks />
        <ShoppingCartIcon className='stroke-white md:ml-auto'/>
      </div>
    </header>
  )
}
