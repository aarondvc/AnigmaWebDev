import { useState } from "react";

const App = () => {

  let data = "boy";
  
  const [x,setx] = useState(0);
  const btnClick = () => {
    console.log("CLicked");
    setx(x+1);
    console.log(x);
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