import React from 'react'
import { Decrement, GetCounter, Increment } from '../Config/Integration'

const Counter = () => {


    const incrementHandler = async()=>{
        try {
            const res= await Increment();

            console.log("response from Increment",res);
        } catch (error) {
            alert(error);
        }
    }
    const decrementHandler = async()=>{
        try {
            const res= await Decrement();

            console.log("response from Increment",res);
        } catch (error) {
            alert(error);
        }
    }
    const getCounterhandler = async()=>{
        try {
            const res= await GetCounter();

            console.log("response from Increment",res);

            console.log("in number", parseInt(res) )
        } catch (error) {
            alert(error);
        }
    }



  return (
   

    <div className='flex m-5 p-5 w-[100%] justify-center items-center gap-9'>

<button className='bg-blue-700 px-2 py-7 rounded-xl text-white' onClick={incrementHandler}>
    Increment
</button>
<button className='bg-red-700 px-2 py-7 rounded-xl text-white' onClick={decrementHandler}>
    Decrement
</button>
<button className='bg-green-700 px-2 py-7 rounded-xl text-white' onClick={getCounterhandler}>
    Show Counter
</button>


    </div>
    

  )
}

export default Counter