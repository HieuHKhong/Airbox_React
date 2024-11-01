import React from "react";

function Body() {
    
    return(
        <MainInfo />
    )
    
}

function MainInfo() {


    return(
        <div className="row MainInfo">
            <div className="col-12 Info1">
                <h2>24/7 Real Person</h2>
            </div>

            <div className="col-12 Info2">
                <h1>Customer Support</h1>
            </div>

            <div className="col-12 Info3">
                <h2>For all our Clients</h2>
            </div>

            <div className="col-12 Info4">
                <p> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nihil unde sunt tempora, dolorum culpa maiores eos ipsum nemo odit explicabo autem, debitis officiis asperiores impedit nesciunt numquam dicta pariatur?
                </p>
            </div>

            <div className="col-12 InfoBtn">
            <input type="button" value={"Try Now"}></input>
            </div>

        </div>
    )
}


export default Body;