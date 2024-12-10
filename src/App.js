import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [advice,setAdvice]=useState('')
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    console.log("the data comg==")
    fetchData()
    
  },[])
  const fetchData=async()=>{
    console.log("Function calling=*******************")
    const res= await fetch('https://api.adviceslip.com/advice')
    const data= await res.json()
    
    setAdvice(data.slip.advice)
    setLoading(true)
  }
  return (
    <div className="app">
      <div className="card">
        {
          loading?
          <h1 className='heading'>{advice}</h1>
          :<h1>Loading data</h1>
        }
      <button className='button' onClick={()=>fetchData()}>
        <span>GIVE ME ADVICE!</span>
      </button>
      
      </div>
    </div>
  );
}

export default App;
