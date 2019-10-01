// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

export default function UserSearch (props) {

  return(
    <div className='searchBar'>
      <input name='search' type='text' onChange={props.update} value={props.value} onSubmit={props.find}></input>
    </div>
  );
}