import React, { useReducer } from 'react'

function reducer(state, action){
  switch(action.type){
    case "SET_NUMBER1":
      return{...state, Number1: action.payload};
    
    case "SET_NUMBER2":
      return{ ...state, Number2: action.payload};


    case "SET_RESULT":
      return{...state, result: action.payload}

  }

}

const initialState = {
  Number1:0,
  Number2:0,
  result:"",
}

const Calculator2 = () => {
  const [state, dispacth] = useReducer(reducer, initialState)

console.log(state);


  function SetNumber1(e){
    dispacth({type: "SET_NUMBER1", payload: e.target.value})
  }


  function SetNumber2(e){
    dispacth({type: "SET_NUMBER2", payload: e.target.value})
  }


  function CalculateHanlder(e){
    e.preventDefault();
    dispacth({type: "SET_RESULT",  payload: Number(state.Number1) + Number(state.Number2)})

  }

  return (
    <div className='flex flex-col gap-6 w-1/3 m-auto mt-16 '>
    <h1 className='text-black font-bold text-6xl text-center'>UseReducer</h1>
    <div className='bg-white p-6 rounded-md shadow-lg'>
    <form className='flex flex-col gap-10' onClick={CalculateHanlder}>
    <div className='flex flex-col gap-2'>
    <label className='font-medium text-base' htmlFor="first-number">First Number:</label>
    <input className='border rounded-2xl p-2 bg-gray-50' id = "first-number" type="number" placeholder='Enter a number...' onChange={SetNumber1} />
    </div>
    <div className='flex flex-col gap-2'>
    <label  className='font-medium text-base' htmlFor='second-number'>Second Number:</label>
    <input className='border rounded-2xl p-2 bg-gray-50'  id='second-number' type="number" placeholder='Enter a number...' onChange={SetNumber2}  />
    </div>
    <button className='border bg-green-600 text-white rounded-lg p-2 font-bold text-xl' type='submit'>Calculate</button>
    <input className='border rounded-2xl p-2 bg-gray-50' type="number" id='result' value={state.result} placeholder='Result...' readOnly/>
    </form>
</div>
</div>
  )
}

export default Calculator2