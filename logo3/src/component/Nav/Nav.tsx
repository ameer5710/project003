import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className=' gap-5 text-2xl bg-slate-400 text-red-500'>
        <header className="flex py-1 px-1 text-2xl  bg-blue-800  ">
    <Image className="w-23 h-25 md:w-15 ml-auto " src="/smro.jpg" alt="" width="60" height="120"/>
    </header>
        <Link href="\">HOME</Link>
        <Link href="\name">NAME</Link>
        <Link href="\name\contact">CONTACT</Link>
    </div>
  )
}

export default Nav