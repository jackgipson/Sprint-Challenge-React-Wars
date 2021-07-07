import React from "react";

const characters = props => {
  return (
    <div className='char-name'>
    <p>{props.starwarsChars.name}</p>
    </div>
  )
}
export default characters;
