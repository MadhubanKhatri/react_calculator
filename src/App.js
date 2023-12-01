import { useState } from "react";

function App() {
  const arr = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/","C"];
  const [counter, setCounter] = useState("");

  function handleClick(event){
    const value = event.target.value;
    setCounter(counter+value);

  }

  function handleEqual(){
    setCounter(eval(counter));
    console.log(eval(counter));
  }

  function clearScreen(){
    setCounter("");
  }
  
  return (
    <div className="container my-5 w-25 bg-warning py-5 rounded">
      <input type="text" className="form-control fs-4" style={{textAlign:"right"}} value={counter} readOnly/>
      <br/>
      <div className="row">
      {
        arr.map((ele)=><div className="col-4 my-2">
          <input type="button" className="btn btn-sm btn-primary w-100 fs-4" value={ele} onClick={(ele=="C"?clearScreen:handleClick)}/>
        </div>)
      }
      </div>
      <input type="button" className="btn btn-sm btn-primary w-100 fs-4" value={"="} onClick={handleEqual}/>
    </div>
  );
}

export default App;