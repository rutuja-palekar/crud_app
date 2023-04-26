import React from 'react';

export default function Dropdown(props) {

  return (
    <div className="dropdownMenu">
      <select value={props.selectedOption} onChange={props.onChange} style={
        {
          padding: '0.5rem 1.5rem 0.5rem 1.5rem',
          marginLeft: '1rem',
          marginTop: '1rem',
          fontSize: '1rem',
          borderRadius: '0.4rem'
        }
      }>
        <option value="defaultOption">Dropdown</option>
        <option value="option2">CSS</option>
        <option value="option3">JavaScript</option>
        <option value="option4">React JS</option>
      </select>
    </div>
  );
}
