import React, { useState } from 'react';

// import data
import { countries } from '../countriesData';
// import ClearButton from './ClearButton';
import SerachBar from './SerachBar';
import Option from './Option';
import OptionsDropdown from './OptionsDropdown';

function App() {
  const [countriesArr, setCountry] = useState(countries);
  const [SerachBarString, setSerachBar] = useState('');

  const changeSerachBarString = str => {
    setSerachBar(str);
    // setCountry(str);
  };

  function chooseCountry(e) {
    console.log('yes');
  }

  function filterCountries(str) {
    str = str || str.toLowerCase();
    const filterArr = countriesArr.filter(country =>
      country.label.toLowerCase().includes(str)
    );
    return filterArr;
  }

  return (
    <div id="divapp">
      <h2>Which country do you want to call?</h2>
      <SerachBar onStringChange={changeSerachBarString} />
      {/* <Option /> */}
      <OptionsDropdown
        countries={filterCountries(SerachBarString)}
        chooseCountry={chooseCountry}
      />
    </div>
  );
}

export default App;
