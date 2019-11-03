import React from 'react';
function Nav(props) {
    return (
        <nav>
            <div >
                <input className="search-input" onChange={(props.handleInputChange)}/>
                <button className="search-btn"><i className="fa fa-search"></i></button>

                <button className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty"
                        aria-hidden="true"
                    ></i>
                    <sup>&deg;</sup>C
                </button>
            </div>
        </nav>
    );
}
export default Nav;