import React, { useState } from 'react';

export default function App() {

  const [inputValue , setInputValue] = useState('');
  const [limitInput , setLimitInput] = useState(80);

  window.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
        handleSubmit()
    }
  })

  const handleSubmit= () => {
    if(inputValue.length < 80){
      console.log('You must enter more than 80 characters')
    }else{
      console.log('send!')
    }
  }

  return (
    <div>
      <textarea
      value={inputValue}
      onChange={(e) => {
          const result = e.target.value.trim()
          setInputValue(result);
          if(limitInput != 0){
              setLimitInput(80 - result.length)
          }else if(result.length < 80){
              setLimitInput(80 - result.length)
          }
      }}
      />
      <span>{limitInput}</span>
      <button onClick={handleSubmit}>
        Submit
      </button>
  </div>
  );
}
