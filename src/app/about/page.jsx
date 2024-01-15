import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

function AboutUs() {
  return (
    <div className={styles.imgContainer}>
      <Image src='https://cdn.pixabay.com/photo/2024/01/08/17/41/chokeberry-8496026_1280.jpg' alt='tst' title='hi' fill />
    </div>
  )
}

export default AboutUs