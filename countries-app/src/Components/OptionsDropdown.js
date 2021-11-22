import React from 'react';
import { countries } from '../countriesData';

function OptionsDropdown() {
  return (
    <div>
      <label for="ice-cream-choice">Choose a country:</label>
      <input list="cuntries" id="ice-cream-choice" name="ice-cream-choice" />

      <datalist id="cuntries">
        {countries.map(contry => {
          return (
            <option key={contry.label} value={contry.label}>
              {contry.code}, {contry.phone}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}

export default OptionsDropdown;
