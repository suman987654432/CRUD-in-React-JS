
const Home = () => {
  const display = () => {
    alert("welcome")
  }
  const display1 = (my, nm, e) => {
    alert(`my namme is ${my}${nm} ${e.type}`)
  }
  const display2 = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name, value)
    alert("my name " + e.type)
  }
  const getVal = (e) => {
    let name = e.target.name
    let value = e.target.value

    console.log({ [name]: value })
  }
  //   const ans = Data.map((product) => {
  //     return (
  //       <Card
  //         key={product.id}
  //         image={product.image}
  //         name={product.name}
  //         title={product.title}
  //         price={product.price}
  //       />
  //     );
  //   });

  //   return (
  //     <>
  //       {ans}
  //     </>
  //   );
  // };
  return (
    <>
      <button onClick={display}>click</button>
      {/* <button onClick={(e) => { display1("suman kumar", "singh", e) }}>name click</button> */}
      <button onClick={display1("suman kumar ")}></button>
      <button name="mybtn" value="btn1" onClick={display2}>event</button>

      enter name = <input type="text" name="suman" onChange={getVal} />

    </>


  )
}
export default Home;
