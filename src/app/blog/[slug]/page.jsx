import styles from './post.module.css';
import Image from 'next/image';
import { getUser } from '@/lib/data';
import { getPost } from '@/lib/data';

// const getData = async (slug) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('Something went wrong')

//   }
//   return res.json();

// }

// const fetchUsers = async (userid) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)

//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()

// }

const Post = async ({ params }) => {
  const { slug }  = params;
  const post = await getPost(slug);
  const user = await getUser(post.userId);
  console.log(user)


  return (
    <div >
      <span> user : {user.username &&  user.username}</span>
      {post.img && <div className={styles.imgContainer}>
        <Image src={post.img} alt=''  width={300} height={300} />
      </div>}
      <span className={styles.postTitle}>{post.title}</span>
      <p className={styles.postDesc}>{post.desc}</p>

    </div>
  )
}

export default Post