import React,{useContext} from 'react'
import {countContext} from '../Context/CounterContextProvider'

export default function Parent() {
    let {counter,increment,products} = useContext(countContext);

  return (
    <div>
        <h2>count is : {counter}</h2>
        <h2>product is : {products}</h2>

        <button onClick={increment}>click</button>
    </div>
  )
}
