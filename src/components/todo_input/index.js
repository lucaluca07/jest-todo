import React from 'react';

const TodoInput = ({onEnter, autoFocus, placeholder}) => {
  const handleEnter = e => {
    const value = e.target.value;
    if(e.key === 'Enter' && onEnter && value) {
      onEnter(value);
      e.target.value = '';
    }
  }

  return (
    <input placeholder={placeholder} autoFocus={autoFocus} onKeyDown={handleEnter} type="text"/>
  )
}

export default TodoInput;
