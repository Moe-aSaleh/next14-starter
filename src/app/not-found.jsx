import React from 'react'
import Link from "next/link";

function NotFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFound