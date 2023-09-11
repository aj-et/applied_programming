'use client'

import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constants'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='w-full flex items-center py-5'>
        <div className='w-full flex justify-between items-center'>
            <Link 
                href='/'
                className='flex items-center gap-2'
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <Image src='/hash_brown.png' width={36} height={36} alt='logo' />
                <p className='text-[18px] font-bold cursor-pointer flex'>Aaron Tumbokon</p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className='text-[18px] font-medium cursor-pointer'
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar