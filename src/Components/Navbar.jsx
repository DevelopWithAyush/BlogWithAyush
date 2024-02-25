import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname)
  return (<>
    <header className='z-10  fixed top-0 left-0 w-[100vw] flex  justify-between px-28 py-4   bg-[#0f172a] bg-opacity-20 border-t-[0px] border-l-[0px] border-r-[0px] border-b-[1px] border-solid border-blue-500 border-opacity-[.2] shadow-none backdrop-blur-[9.9px] '>
      <Link href="/" className='text-2xl font-semibold'>BlogsWithAyush</Link>
      <nav className='flex gap-14 text-xl font-medium	'>
        <Link className={`${pathname === "/" ? "active" : "text-gray-600"} navlink`} href="/">Home</Link>
        <Link className={`${pathname === "/blog" ? "active" : "text-white-500"} navlink  `} href="/blog">blogs</Link>
        <Link className={`${pathname === "/news" ? "active" : "text-white-500"} navlink `} href="/news">news</Link>
        <Link className={`${pathname === "/about" ? "active" : "text-white-500"} navlink `} href="/about">about</Link>
      </nav>
    </header>
    <div className='blur'></div>



  </>

  )
}

export default Navbar
