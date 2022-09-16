import React from 'react';

const Languages = (props) => {
  return (
    <>
      <select onChange={(e)=>props.handleClick(e.target.value)} className="inline-block outline-none" >
        <option className='select:bg-green-950' value="en">En</option>
        <option value="ar">Ar</option>
      </select>
    </>
  )
}

export default Languages