import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const filtered = products.filter(item => item.bestseller);
        setBestSeller(filtered.slice(0, 5));
    },[])

    console.log({bestSeller})

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={"SELLERS"}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
            adfadfadafadfadfadfa adfadafad fadafadafadafad afadafad fa</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
                ))
            }
        </div>

    </div>
  )
}

export default BestSeller