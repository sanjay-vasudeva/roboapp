import React from 'react';

const searchBox = ({searchChange}) =>{
return (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type= 'Text'
      onChange = {searchChange}
      placeholder="Enter Robot name"
    />
  </div>
);
}

export default searchBox;