'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/data/data'

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <nav className='bg-white px-1.5 py-2 w-full lg:w-[43%] rounded-xl lg:fixed'>
                <ul className='flex gap-2'>
                    {
                        navigation.map(({ name, href }) => {
                            return <li key={href} className={`w-1/2 p-2 rounded-lg text-center text-sm font-semibold ${pathname === href ? 'bg-gray-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
                                <Link href={href}>{name}</Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar