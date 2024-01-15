import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postcard/postcard';
import { getPosts } from '@/lib/data'

// WITH FETCH API
// const fetchPosts = async () =>{
//   const results = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if(!results.ok){
//     throw new Error("Something Went Wrong");
//   }
//   return results.json()
// }


async function Blog() {

  // WITH FETCH API
  // const posts = await fetchPosts()
  
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map(post => (
    <PostCard item={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Blog