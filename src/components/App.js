import { useState} from 'react';
import Dropdown from './Dropdown'
import './styles/App.css';
import cityMap from './assets/riskHaritasi.png';
import cities from './Cities'
import RiskLevelZero from './RiskLevelZero';
import RiskLevelOne from './RiskLevelOne';
import RiskLevelTwo from './RiskLevelTwo';
import RiskLevelThree from './RiskLevelThree';

const getCityStatusCode = (value) => {
  if (value === '0') return <RiskLevelZero />;
  if (value === '1') return <RiskLevelOne />;
  if (value === '2') return <RiskLevelTwo />;
  if (value === '3') return <RiskLevelThree />
};
const getCityStatus = (value) => {
  if (value === '0') return ["DÜŞÜK RİSKLİ","blue"];
  if (value === '1') return ["ORTA RİSKLİ","#ffe227"]
  if (value === '2') return ["YÜKSEK RİSKLİ","orange"]
  if (value === '3') return ["ÇOK YÜKSEK RİSKLİ","red"];
};

function App() {
  const [cityStatus, setStatus] = useState(getCityStatusCode(cities['ADANA']));
  const [cityName, setCityName] = useState("ADANA");
  const [riskDescription, setRiskDescription] = useState(getCityStatus("1"));


  const renderCityResult = (value) => {
    const cityCode = getCityStatusCode(cities[value]);
    setStatus(cityCode);
    setCityName(value);
    setRiskDescription(getCityStatus(cities[value]));
  }

  return (
    <div className="App">
      <div className="map-container">
        <img src={cityMap} alt="riskHaritasi" />
      </div>
      <Dropdown className="dropdown" value={renderCityResult} />
      <div className="desc-container " style = {{backgroundColor:riskDescription[1]}}>
        <div className="risk-desc" >
          {riskDescription[0]}
        </div>
      </div>

      <div className="result">{cityStatus}</div>
      <div className="creator">Created by <a href="www.github.com/afatihyavasi" target="_blank">afatihyavasi</a></div>
    </div>

  );
}

export default App;
