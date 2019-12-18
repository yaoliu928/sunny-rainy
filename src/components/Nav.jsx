import React from 'react';
import { connect } from 'react-redux';
import { changeUnitAction, handleInputAction, fetchDataThunkAction } from '../redux/weatherAction';

const Nav = ({fetchWeatherData,input, inputValue, handleInputChange,toggleUnit,unit}) => {
    const handleSearch = () => {
        fetchWeatherData(input);
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <nav>
            <div >
                <input
                    value={inputValue}
                    className="search-input"
                    onChange={handleInputChange}
                    placeholder=" E.g. sydney"
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
                <button onClick={handleSearch}
                    className="search-btn"><i className="fa fa-search"></i></button>
                <button onClick={toggleUnit} className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty temp-switch__icon"
                        aria-hidden="true"
                    ></i>
                    {unit}
                </button>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    unit: state.weather.unit,
    input: state.weather.input
})

const mapDispatchToProps = dispatch => ({
    toggleUnit: () => dispatch(changeUnitAction()),
    handleInputChange: (e) => dispatch(handleInputAction(e)),
    fetchWeatherData: (city) => dispatch(fetchDataThunkAction(city))

})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
