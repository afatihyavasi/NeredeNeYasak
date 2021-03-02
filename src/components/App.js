import { useState } from 'react';
import Dropdown from './Dropdown'

function App() {
  const [cityName, setCities] = useState("");

  const getValue = (value) => {
    setCities(value);
  }

  return (
    <div>
      <Dropdown value={getValue} />

    </div>

  );
}

export default App;
