import React from 'react';

function OptionsDropdown(props) {
  return (
    <div id="options-dropdown">
      <ul id="cuntries">
        {props.countries.map(contry => (
          <li
            key={contry.label}
            id={contry.label}
            onClick={props.chooseCountry}
          >
            {contry.label}, {contry.code}, {contry.phone}
            <img
              alt="fleg"
              src={`https://flagcdn.com/16x12/${contry.code.toLowerCase()}.png`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionsDropdown;
