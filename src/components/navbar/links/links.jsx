import React from 'react';
import SingleLink from './link/link';

function Links() {

    
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
    
    {links.map(link=> (

        <SingleLink item={link} itemPath={link.path} key={link.path}></SingleLink>

    ))}
    </>

    
  )
}

export default Links