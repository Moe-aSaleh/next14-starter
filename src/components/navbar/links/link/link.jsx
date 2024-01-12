import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './link.module.css'



function SingleLink({item}) {
  const pathname = usePathname();


  return (
    <>
    <Link href={item.path} className={pathname === item.path && styles.active} >{item.title}</Link>
    </>
  )
}

export default SingleLink