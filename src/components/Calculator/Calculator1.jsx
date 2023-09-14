import React, { useState } from 'react'

const Calculator1 = () => {
    const [firstNumber, setfirstNumber] = useState(0);
    const [secondNumber, setsecondNumber] = useState(0);
    const [result, setresult] = useState()


    const CalculateHandle = (e) =>{
        e.preventDefault();
        setresult(Number(firstNumber) + Number(secondNumber));

    }
    


  return (
    <div className='flex flex-col gap-6 w-1/3 m-auto mt-16 '>
        <h1 className='text-black font-bold text-6xl text-center'>UseState</h1>
        <div className='bg-white p-6 rounded-md shadow-lg'>
        <form className='flex flex-col gap-10' onSubmit={CalculateHandle}>
        <div className='flex flex-col gap-2'>
        <label className='font-medium text-base' htmlFor="first-number">First Number:</label>
        <input className='border rounded-2xl p-2 bg-gray-50' id = "first-number" type="number" placeholder='Enter a number...'  onChange={(e) =>setfirstNumber(e.target.value)} />
        </div>
        <div className='flex flex-col gap-2'>
        <label  className='font-medium text-base' htmlFor='second-number'>Second Number:</label>
        <input className='border rounded-2xl p-2 bg-gray-50'  id='second-number' type="number" placeholder='Enter a number...'  onChange={(e) =>setsecondNumber(e.target.value)} />
        </div>
        <button className='border bg-green-600 text-white rounded-lg p-2 font-bold text-xl' type='submit'>Calculate</button>
        <input className='border rounded-2xl p-2 bg-gray-50' type="number" id='result' value={result} placeholder='Result...' readOnly/>
        </form>
    </div>
    </div>
  )
}

export default Calculator1