'use client';
import React from 'react';
import Link from "next/link";
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      title : 'Home',
      path :  '/' 

    },
    {
      title : 'About us',
      path :  '/about' 

    },
    {
      title : 'Contact Us',
      path :  '/contact' 

    },
    {
      title : 'Blog',
      path :  '/blog' 

    }
   
  ]


  return (
    <>
    
    <div className={styles.container}>
        <div>
          Logo
        </div>
        <div className={styles.navLinks}>
          {links.map(link=> (

          <Link className={ pathname == link.path ? styles.active : undefined} href={link.path} key={link.title}>{link.title}</Link>
          
          ))}
          <span className={styles.hamBurger}>Menu</span>
        </div>
    </div>
        <div className={styles.mobilenav}>
          {links.map(link => (
            <Link href={link.path} key={link.path}>{link.title}</Link>
          ))}
        </div>
    </>
  )
}

export default Navbar