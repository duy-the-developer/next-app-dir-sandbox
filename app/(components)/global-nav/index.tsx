import React from 'react'
import Link from 'next/link'

const navItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'React Hooks',
        path: '/react-hooks',
    },
]

const GlobalNav = () => {
    return (
        <nav className="text-2xl">
            <ul>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default GlobalNav
