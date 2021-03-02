import cities from './Cities.js';
import './styles/DropDown.css'
const cityKeys = Object.keys(cities);
const Dropdown = (props) => {

    const handleDropdown = (e) => {
        props.value(e.target.value);
    }

    return (
     
        <select className = "selection" onChange={(e) => handleDropdown(e)} >
            {cityKeys.map((city) => (
                <option value={city} key={city}>{city}</option>
            ))}
        </select>
    );
}

export default Dropdown;

