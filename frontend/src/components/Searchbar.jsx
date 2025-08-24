import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../../assets/assets';

const Searchbar = () => {
    const {showSearch,setShowSearch , search,setSearch} = useContext(ShopContext);

  return showSearch? (
    <div className='border-t border-b border-gray-100 bg-gray-50 text-center '>
        <div className='inline-flex p-2 items-center justify-center border border-gray-300 px-5 my-4 mx-4 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'></input>
            <img src={assets.search_icon} className='w-4' alt=""></img>
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon}></img>
        
    </div>
  ) : null
}

export default Searchbar