import React,{useState} from 'react'
import { GetNameToAge, SetNameToAge } from '../Config/Integration'

const Mapping = () => {
    const [name, setName] = useState("")
    const [name2, setName2] = useState("")
    const [age, setAge] = useState("")


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleNameChange2 = (e) => {
        setName2(e.target.value);
    }


    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }


    const handleSubmit = async () => {

        console.log(name,age)
        try {
            const res  = await SetNameToAge({name,age});
            console.log("response from setter",res)
        } catch (error) {
            console.log(error);
        }
    }


    const getage = async () =>{
        console.log(name2);

        try {
            const res = await GetNameToAge({name:name2})
            console.log("from getage", res);

            console.log("in int", parseInt(res))
        } catch (error) {
            console.log(error);
        }


    }
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-8'>

        <div>

<input type='text' value={name} onChange={handleNameChange} className='p-3 border-spacing-2 border-red-400 border-solid'  placeholder='enter the name' />
        </div>

        <div>
        <input type='text' value={age} onChange={handleAgeChange}  className='p-3 border-spacing-2 border-red-400 border-solid' placeholder='enter the age' />


        </div>

        <div>

            <button className='py-5 px-2 bg-blue-800 rounded-3xl text-white' onClick={handleSubmit}> Submit</button>
        </div>
        
    </div>

<div className='flex flex-col justify-center items-center gap-8'>

<div>

<input type='text' value={name2} onChange={handleNameChange2} className='p-3 border-spacing-2 border-red-400 border-solid'  placeholder='enter the name' />
</div>



<div>

    <button className='py-5 px-2 bg-blue-800 rounded-3xl text-white' onClick={getage}> Submit</button>
</div>

</div>

</>
  )
}

export default Mapping