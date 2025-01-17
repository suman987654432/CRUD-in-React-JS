import { useState, useEffect } from "react"
//  use state hook  
const FormHandle = () => {
    //     const [val, setVal] = useState("ram")
    //     const myVal = () => {
    //         setVal("suman kumar singh")
    //     }
    // const [clr, setClr] = useState("red")

    const [count, setCount] = useState(0)
    const [multi, setMulti] = useState(0)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count + 1)

    //     }, 1000)
    // },)

    useEffect(() => {
        setMulti(count * 2)
    }, [count]
    )

    return (
        <>

            <h1>App={count}</h1>
            <h1>multi{multi}</h1>
            <button onClick={() => { setCount(count + 1) }}>click</button>





        </>
    )
}

export default FormHandle

