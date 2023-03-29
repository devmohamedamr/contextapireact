import { createContext, useState } from "react";

export let countContext = createContext();

export default function CounterContextProvider(props)
{
    let [counter,setCounter] = useState(0);
    let [products,setProducts] = useState("product tv");


    function increment(){
        setCounter(counter+1);
    }
    return <countContext.Provider value={ {counter,increment,products} }>
        {props.children}
    </countContext.Provider>
}