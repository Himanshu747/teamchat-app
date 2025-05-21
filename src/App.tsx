import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register';

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    
  )
  // const [test, setTest] = useState("");
  // useEffect(() => {
  //   setTest("Himanshu");
  //   console.log(test);
  // }, []);
  // const onClkmyBtn = (name: string) => {

  //   console.log(`this is a ${name}`);
  // };
  // return (
  //   <div className="App">
  //     {test}
  //     <button onClick={() => onClkmyBtn('raj')}>Click me</button>

  //   </div>
  // );
}

export default App;
