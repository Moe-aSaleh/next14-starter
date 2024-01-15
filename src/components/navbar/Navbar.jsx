'use client';
import React, { useState } from 'react';
import Link from "next/link";
import style from './navbar.module.css';
import Links from './links/links';

function Navbar() {

  const [navOpen , setNavopen] = useState(false)
  const [isLogedIn , setLogedIn] = useState(false)


  return (
    <>
    
    <div className={style.container}>
        <div>
          <Link href='/' >Moe</Link>
        </div>
        <div className={style.navLinks}>
          <Links />
          <Link href='/admin'>Admin</Link>  
          <Link className={style.logBtn} href='/login'>{isLogedIn ? 'Logout' : 'Login' }</Link>  
        </div>
          <span onClick={()=>setNavopen((prev)=>!prev)} className={style.hamBurger}>Menu</span>
    </div>
    
        {navOpen && (<div className={style.mobilenav}>
          <Links />
        </div>)}
    </>
  )
}

export default Navbar