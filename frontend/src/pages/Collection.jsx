import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const{products , search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const[FilterProducts,SetFilterProducts] = useState([]);
  const [Category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory=(e)=>{

    if(Category.includes(e.target.value)){
        setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value ])
    }
  }

  const toggleSubCategory=(e)=>{

    if(subCategory.includes(e.target.value)){
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value ])
    }

    
  }

  const sortProduct= ()=>{
      let fpCopy = FilterProducts.slice(); 
      switch (sortType){
        case 'low-high' :
          SetFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case 'high-low' :
          SetFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

        default:
          applyFilter();
          break;
      }
  }


  const applyFilter = () =>{
    let productsCopy = products.slice(); 

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(Category.length>0){
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    SetFilterProducts(productsCopy);
  }

  useEffect(()=>{
      applyFilter();
  },[Category,subCategory, search,showSearch])
  useEffect(()=>{
      sortProduct();
  },[sortType])
  
 

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}

      <div className='min-w-[15rem]'>
        <p onClick={()=>{setShowFilter(!showFilter)}} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
          <img className={`h-3 sm:hidden ${showFilter? `rotate-90` :``}`} src={assets.dropdown_icon}></img>
        </p>
        
        {/* catagary filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? ``: `hidden` } sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"Men"} onChange={toggleCategory}></input> Men
            </p>
            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"Women"} onChange={toggleCategory}></input>Women
            </p>
            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"Kids"} onChange={toggleCategory}></input>Kids
            </p>

          </div>

        </div>
        {/* subcatagory filter  */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? ``: `hidden` } sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"Topwear"} onChange={toggleSubCategory}></input> Topwear
            </p>
            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}></input> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className="w-3 " type="checkbox" value={"WinterWear"} onChange={toggleSubCategory}></input>WinterWear
            </p>

          </div>

        </div>


      </div>
      {/* Right side */}
      <div className='flex-1'> 
        <div className='flex justify-between text-base  sm:text-2xl mb-4'>
          <Title text1={"ALL" } text2 ={"COLLECTION"}></Title>
          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            FilterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}></ProductItem>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Collection