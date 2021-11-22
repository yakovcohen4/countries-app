import React from 'react';

function OptionsDropdown(props) {
  return (
    <div id="options-dropdown">
      <label>Choose a country:</label>
      {/* <input
        placeholder="show countries"
        list="cuntries"
        id="ice-cream-choice"
        name="ice-cream-choice"
      /> */}

      <ul id="cuntries">
        {props.countries.map(contry => (
          <li
            key={contry.label}
            value={contry.label}
            onClick={props.chooseCountry}
          >
            <img
              alt="fleg"
              src={`https://flagcdn.com/16x12/${contry.code.toLowerCase()}.png`}
            />
            {contry.label}, {contry.code}, {contry.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionsDropdown;
