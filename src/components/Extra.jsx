import React from 'react'

const Extra = ({cantPersonal, setCantPersonal, setCantidad }) => {
  return (
    <div>
        <p className='text-4xl font-extrabold text-gray-500 text-center mb-5'>Otra <span className='text-indigo-600'>Cantidad</span> : </p>

        <input type="number" className='bg-gray-200 mx-auto w-full rounded-md h-12 p-5 text-center font-extrabold text-2xl text-gray-600' min={0}
            onChange={(e)=>{setCantPersonal(Number(e.target.value))}}
        />

        <button className='bg-indigo-600 text-center font-extrabold p-3 mt-10 mx-auto w-full rounded-md text-white text-2xl cursor-pointer hover:bg-indigo-500'
            onClick={()=>{setCantidad(cantPersonal)}}
        >
            Agregar
        </button>
    </div>
  )
}

export default Extra
