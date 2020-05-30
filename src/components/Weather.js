import React from 'react';

const Weather = ({result}) => {


    //extract the values
    const { name, main } = result;

    if(!name) return null;

    //Kelvin degrees
    const kelvin = 273.15; 

    return ( 

        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p className="temperature">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>Maximum Temperature: &nbsp;
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>Minimum Temperature: &nbsp;
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>
        </div>

     );
}
 
export default Weather;