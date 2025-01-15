import { useState, useEffect } from "react"
//  use state hook  
const FormHandle = () => {
    //     const [val, setVal] = useState("ram")
    //     const myVal = () => {
    //         setVal("suman kumar singh")
    //     }
    // const [clr, setClr] = useState("red")

    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)

        }, 1000)
    },)

    return (
        <>


            {/* <h1>Name : {val}</h1>
            <button onClick={myVal}>click</button> */}

            {/* <h1 style={{ color: clr }}>welcome to cybrom:</h1>
            <button onClick={() => { setClr("green") }}>red</button>
            <button onClick={() => { setClr("pink") }}>red</button>
            <button onClick={() => { setClr("purple") }}>red</button> */}


            <h1>count is {count}</h1>
            {/* <button onClick={() => { setCount(count + 1) }}>incremenet</button>
            <button onClick={() => { setCount(count - 1) }}>decrement</button> */}

        </>
    )
}

export default FormHandle

