import React from 'react';
import Card from './Card';
import Data from './Data';
const Works = () => {
    
     
    return (
        <div className="container">
            <div>
                <h4 className=" my-5 text-center">“तेरा वजूद मेरी दुआओं में हो,

मेरी हाथों की लकीरों में तू ऐसे समाये,

मैं दुआ में अमीन कहूं,

और तू मेरी हो जाये” <span className="font-weight-bold" >- Muhammad Ali</span> </h4>
     
                
            </div>
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Data.map(data=> <Card data={data}></Card>)
            }
        </div>
        </div>
        
    );
};

export default Works;