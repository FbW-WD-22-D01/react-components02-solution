import { useState } from "react";

function Fruit(){

    const [fruitsState, setFruitsState] = useState([{color: 'red', fruit: 'Mango'},{color: 'red', fruit: 'Apple'}, {color: 'red', fruit: 'Banana'},{color: 'red', fruit: 'Lemon'}]);


    function handleColor(i){
        console.log('change color', i)
        const newArray = fruitsState.map((el,index) => {
                 if (i===index){
                     el.color = 'blue'
                 }     
             return el
             })
        // kurz:
        // const newArray = fruitsState.map((el,index) => i===index ? {...el, color: 'blue'} : el)
        setFruitsState(newArray)
    }



    function handleDelete(i){
        console.log('delete', i)
        const newArray = fruitsState.filter((el,index) => {
             if(i!==index){
                 return el
             }
        })
        // kurz
        // const newArray = fruitsState.filter(( el,index) => i!==index && el)
        console.log(newArray)
        setFruitsState(newArray)
    }

    return(
        <>
            <h1>Fruits</h1>
            <ul>
                {fruitsState.map((el,index) => {
                    return(
                        <li key={index}>
                            {el.fruit}, color= {el.color} 
                            <button onClick={() => handleColor(index)}>Change Color</button>
                            <button onClick={() => handleDelete(index)}>Delete Me</button>
                        </li>
                    )
                })}
            </ul>
        
        </>
    )
}

export default Fruit