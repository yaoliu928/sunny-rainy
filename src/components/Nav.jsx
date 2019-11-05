import React from 'react';
function Nav(props) {
    return (
        <nav>
            <div >
                <input 
                value={props.inputValue} 
                className="search-input" 
                onChange={props.handleInputChange}
                placeholder="AU cityname"
                autofocus="true"
                />
                <button onClick={props.handleSearch}
                className="search-btn"><i className="fa fa-search"></i></button>

                <button onClick={props.toggleUnit} className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty"
                        aria-hidden="true"
                    ></i>
                    {//<sup>&deg;</sup>
                    }
                    {props.unit}
                </button>
            </div>
        </nav>
    );
}
export default Nav;