"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)

    console.log(searchTerm);
  }

  // NavLinks should be part of the component
  type NavLink = {
    id: number;
    href: string;
    name: string;
  };

  const navLinks: NavLink[] = [
    {
      id: 0,
      href: '/phones',
      name: 'Phones',
    },
    {
      id: 1,
      href: '/tablets',
      name: 'Tablets',
    },
  ];

  return (
    <>
      <header>
        <nav className="align-between justify-center bg-gray-100">
          <div className="wrapper flex items-center justify-between gap-3">
         <Link href='/'><h1 className="text-xl font-bold">Tech.io</h1></Link>   
            <div className="wrapper flex items-center justify-between gap-3 p-4">
          {navLinks.map((item) => (
            <div key={item.id} className="text-l text-black px-4 py-2 rounded hover:bg-blue-600 transition-all align-center">
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
        <input value={searchTerm} onChange={handleInputChange} type="text" name="search" id="" placeholder='Search..' className='border-gray-600 p-1 rounded-md placeholder:text-gray-500' />
            <Link href="/checkout-step-1">Shopping cart</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
