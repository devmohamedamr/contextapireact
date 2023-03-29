import React, { useContext } from 'react'
import {countContext} from '../Context/CounterContextProvider'
export default function Child() {
    let {counter} = useContext(countContext);
    
  return (
    <div>
        <h1>count is : {counter}</h1>    
    </div>
  )
}
