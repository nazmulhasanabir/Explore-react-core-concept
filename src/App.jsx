import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
 function ClickedME(){
  alert('button clicked')
 }
 
function clicked2(){
  alert('2 no button clicked')
}

  return (
    <>

<Users></Users>
<Counter></Counter> 
      <h1>Vite + React</h1>
    <button onClick={ClickedME}>Clicked Me</button>
    <button onClick={clicked2}>Clicked Me 2 </button>
    <button onClick={()=>{ alert('arrow btn clicked')}}>Arrow Button</button>
    </>
  )
}

export default App
