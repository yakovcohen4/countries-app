import React, { useEffect, useRef } from 'react';
//
import ClearButton from './ClearButton';

function SerachBar(props) {
  const country = useRef();

  // useEffect(() => {
  //   // country.current.focus();
  //   // console.log(country.current.value);
  //   // console.log('you in effect fun');
  //   // console.log(country.current);
  // }, [country]);

  function clear(name) {
    return (name = '');
  }

  return (
    <div id="search-bar">
      <input
        ref={country}
        // onChange={this.useEffect}
        type="text"
        value={props.pickCountry.toLowerCase()}
        className="inputField"
        placeholder="click to show countries"
        onChange={() => {
          props.onStringChange(
            country.current.value ? country.current.value : ''
          );
        }}
      />
      <ClearButton clear={props.onStringChange} />
    </div>
  );
}

export default SerachBar;
