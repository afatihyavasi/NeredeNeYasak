import cities from './Cities.js'
const cityKeys = Object.keys(cities);

const Dropdown = (props) => {

    const handleDropdown = (e) => {
        props.value(e.target.value);
    }

    return (
        <select id="dropdown" name="city" onChange={(e) => handleDropdown(e)} >
            {cityKeys.map((city) => (
                <option value={cities[city]} key={city}>{city}</option>
            ))}
        </select>
    );
}

export default Dropdown;

