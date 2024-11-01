import React from "react";



const OuterInfo = [
    {
        Title: "Mini Hosting",
        Cost: "$10.99",
        Space: "4 GB DISK SPACE",
        Bandwidth: "20 GB BANDWIDTH",
        Email: "100 EMAIL ACCOUNTS",
        Type: "PHP, ROR, MYSQL"
    },
    
    {
        Title: "User Hosting",
        Cost: "$12.99",
        Space: "8 GB DISK SPACE",
        Bandwidth: "40 GB BANDWIDTH",
        Email: "100 EMAIL ACCOUNTS",
        Type: "PHP, ROR, MYSQL"
    },

    {
        Title: "Pro Hosting",
        Cost: "$16.99",
        Space: "10 GB DISK SPACE",
        Bandwidth: "60 GB BANDWIDTH",
        Email: "100 EMAIL ACCOUNTS",
        Type: "PHP, ROR, MYSQL"
    },

    {
        Title: "Maxi Hosting",
        Cost: "$20.99",
        Space: "20 GB DISK SPACE",
        Bandwidth: "100 GB BANDWIDTH",
        Email: "100 EMAIL ACCOUNTS",
        Type: "PHP, ROR, MYSQL"
    },
]

function Maininfo3(){

    const  InnerInfo = OuterInfo.map(
        (currentItem) => {
            return <DisplayInfo 
            RealTitle = {currentItem.Title}
            RealCost = {currentItem.Cost}
            RealSpace = {currentItem.Space}
            RealBandwidth = {currentItem.Bandwidth}
            RealEmail = {currentItem.Email} 
            RealType = {currentItem.Type}/>

        }
    )

    return (
        <div className="row MainInfo3 text-center">
            {InnerInfo}
        </div>
    )
}

function DisplayInfo(props){
    console.log(props);
    return(
        <div className="col-md-3 col-sm-6 col-12 DisplayInfo1">   
            <h2 className="Background">{props.RealTitle}</h2>
            <h3>{props.RealCost}<span>/MO</span></h3>
            <p className="white" id="space">{props.RealSpace}</p>
            <p className="grey">{props.RealBandwidth}</p>
            <p className="white">{props.RealEmail}</p>
            <p className="grey">{props.RealType}</p>
            <div className="white" id="Btn"><input type="button" value={'Sign Up'} /></div>
        </div>
    )
}

export default Maininfo3;