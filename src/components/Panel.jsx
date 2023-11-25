import React, { useEffect, useState } from 'react'
import Header from './Header'
import Extra from './Extra';
import formatMoney from '../helpers/money';
import calculatorTotal from '../helpers/cacl';


export const Panel = () => {

  const[cantidad, setCantidad] = useState(500);

  const[cantPersonal, setCantPersonal] = useState(0);

  const[plazo, setPlazo] = useState(0);

  const[total, setTotal] = useState(0);

  const [pagos, setPagos] = useState(0);

  //VALORES DE LOS RANGOS
  const minimo = 0;
  const maximo = 1000;
  const step = 100;


  const handleChange = (e)=>{
      let rango = Number(e.target.value);
      setCantidad(rango);
  }

  useEffect(()=>{
      const resultadoTotalPagar = calculatorTotal(cantidad, plazo);
      setTotal(resultadoTotalPagar);
  }, [cantidad, plazo])


  useEffect(()=>{
    setPagos(total/plazo);
  }, [total])
  

  return (
    <div className='my-20 bg-white max-w-lg shadow p-10 mx-auto'>
        <Header/>

        <input type="range" value={cantidad} min={minimo} max={maximo} step={step}
            onChange={handleChange}
            className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mb-8'
        />

        <Extra cantPersonal={cantPersonal} setCantPersonal={setCantPersonal} setCantidad={setCantidad}/>

        <p className='text-center my-10 font-extrabold text-5xl text-indigo-600'>
          {formatMoney(cantidad)}
        </p>

        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Elige un <span className='text-indigo-600'>Plazo</span> a pagar
        </h2>

        <select className='mt-5 w-full bg-white rounded-md p-2 border text-center font-bold text-xl text-gray-500'
            onChange={(e)=>{setPlazo(+e.target.value)}}
        >
          <option value="">Seleccionar</option>
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>


        <div className='my-5 space-y-3 p-5 bg-gray-50'>
          <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
            Resumen <span className='text-indigo-600'>de pagos</span> :
          </h2>

          <p className='text-xl text-gray-500 text-center font-extrabold'>
              <span className='text-gray-600'>{plazo}</span> Meses
          </p>

          
          <p className='text-xl text-gray-500 text-center font-extrabold'>
            <span className='text-gray-600'>{formatMoney(total)}</span> Total a pagar
          </p>

          
          <p className='text-xl text-gray-500 text-center font-extrabold'>
            <span className='text-gray-600'>{formatMoney(pagos)}</span> Mensuales 
          </p>

        </div>

    </div>
  )
}
