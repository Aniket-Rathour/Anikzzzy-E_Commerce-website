import React from 'react'

const NewsLetterBox = () => {

    const onSumbitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gray-800 '>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem Ipsum is simple dummy text of the printing and typesetting industry
        </p>

        <form onSubmit={onSumbitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3 '>
            <input className=" w-full sm:flex-1 outline-none" type="email" placeholder=' ENTER YOUR EMAIL'></input>
            <button type="Sumbit" className='bg-black text-white text-xs px-10 py-4'> SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox