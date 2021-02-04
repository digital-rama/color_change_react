import React from 'react'
import './App.css'

export default function App() {
  const colorChange = () => {
    let myArray = ['red', 'green', 'blue'];    
    let rand = myArray[Math.floor(Math.random() * myArray.length)];
    return (
        document.body.style.backgroundColor = rand
      )
    }
  return (
    <div>
      <button
      onClick={colorChange}
      >
        Click to change Color
      </button>
    </div>
  )
}
