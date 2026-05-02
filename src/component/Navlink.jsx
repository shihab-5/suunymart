'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const path=usePathname()
    const isActive= href===path
    console.log(isActive)
    return <Link href={href} className={`${isActive ?'border-b-2 border-sky-500 text-sky-500':''}`}>{children}</Link>;
};

export default Navlink;