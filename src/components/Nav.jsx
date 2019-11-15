import { connect } from 'react-redux';
import { changeUnitAction, handleInputAction, fetchDataThunkAction } from '../redux/weatherAction';


import React from 'react';
function Nav(props) {
    return (
        <nav>
            <div >
                <input
                    value={props.inputValue}
                    className="search-input"
                    onChange={props.handleInputChange}
                    placeholder=" E.g. sydney"
                    autoFocus
                />
                <button onClick={() => props.handleSearch(props.inputValue)}
                    className="search-btn"><i className="fa fa-search"></i></button>

                <button onClick={props.toggleUnit} className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty temp-switch__icon"
                        aria-hidden="true"
                    ></i>

                    {props.unit}
                </button>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    unit: state.weather.unit,
    inputValue: state.weather.input
})

const mapDispatchToProps = dispatch => ({
    toggleUnit: () => dispatch(changeUnitAction()),
    handleInputChange: (e) => dispatch(handleInputAction(e)),
    handleSearch: (city) => dispatch(fetchDataThunkAction(city))

})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
