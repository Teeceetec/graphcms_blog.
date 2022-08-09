import React, {useContext,useEffect,useState} from 'react'
import { getCategories } from '../services'
import Link from 'next/link'



const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='container mx-auto px-10 mb-8'>
       <div className='border-b w-full inline-block border-green-400 py-8'>
          <div className='md:float-left block'>
             <Link href="/">
                 <span className='cursor-pointer font-bold text-4xl text-white'>
                     TeeCMS
                 </span>
            </Link>
          </div>
          <div className='hidden md:float-left md:contents'>
              {categories.map((category) => (
                   <Link key={category.slug} href={`/categories/${category.slug}`}>
                       <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-600 ease hover:text-pink-600 font-2x1'>
                        {category.name}
                       </span>
                   </Link>
             ))}
          </div>
      </div>
      
    </div>
  )
}

export default Header
