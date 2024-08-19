const App = () => {

  let data = "boy";
  let x = 0;
  const btnClick = () => {
    console.log("CLicked");
    x++;
  }
  return (
    <div>
      {x}
      {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
      <button onClick={() => {btnClick}}>Click Md</button>
    </div>
  )
}

export default App