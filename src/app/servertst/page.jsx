
import { addPost, deletePost } from '@/lib/actions';
import { connectTodb } from '@/lib/utils';
import React from 'react';



function ServerTst() {
  return (
    <div>
        <form action={ addPost }>
            <input type="text" name='title' placeholder='title' />
            <input type="text" name='desc' placeholder='desc' />
            <input type="text" name='userId' placeholder='userId'/>
            <input type="text" name='slug'  placeholder='slug'/>
            <input type="text" name='img'  placeholder='Image'/>
            <button>Click</button>
        </form>

        <form action={ deletePost }>
           <input type="text" placeholder='id' name='id' />
            <button>Click</button>
        </form>
    </div>
  )
}

export default ServerTst