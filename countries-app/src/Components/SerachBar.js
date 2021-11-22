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

  return (
    <div id="search-bar">
      <input
        // value=" "
        ref={country}
        // onChange={this.useEffect}
        type="text"
        className="inputField"
        placeholder="click to show countries"
        onChange={() => {
          props.onStringChange(
            country.current.value ? country.current.value : ''
          );
          // props.chooseCountry();
        }}
      />
      {/* <p>{country.current.value}</p> */}
      <ClearButton />
    </div>
  );
}

export default SerachBar;
