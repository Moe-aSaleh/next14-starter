import React from 'react'
import styles from './postcard.module.css';
import Image from 'next/image'
import Link from 'next/link';



function PostCard({item}) {
 
  return (
    <div className={styles.cardContainer}>
        {item.img && <div className={styles.imgContainer}>
          <Image src={item.img} alt='' fill />
        </div>}
        <span className={styles.postTitle}>{item.title}</span>
        <p className={styles.postDesc}>{item.body}</p>
        <Link href={`/blog/${item.slug}`} >Read More</Link>
    </div>
  )
}

export default PostCard