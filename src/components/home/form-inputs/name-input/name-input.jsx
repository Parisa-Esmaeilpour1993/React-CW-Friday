import React from 'react'
import './name-input.css'
export default function NameInput() {
  return (
    <div className='nameInputContainer'>
      <label className='nameLabel' htmlFor="name">Name: </label>
      <input className='inputName' type="text" />
    </div>
  )
}
