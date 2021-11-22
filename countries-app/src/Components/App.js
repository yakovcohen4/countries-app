import React from 'react';
import cuntriesData from '../countriesData';

// imports
import ClearButton from './ClearButton';
import SerachBar from './SerachBar';
import Option from './Option';
import OptionsDropdown from './OptionsDropdown';

function App() {
  return (
    <div>
      <ClearButton />
      <SerachBar />
      <Option />
      <OptionsDropdown />
    </div>
  );
}

export default App;
