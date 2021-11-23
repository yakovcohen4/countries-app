import React from 'react';

function ClearButton(props) {
  return (
    <button
      onClick={() => {
        props.clear('');
      }}
    >
      clear
    </button>
  );
}

export default ClearButton;
