import React from "react";
import ControlPanel from '../images/controlpanel.png'
import Multi_Domain from '../images/multi-domain.png'
import FTP from '../images/ftp.png'
import Direct from '../images/direct.png'
function MainInfo2(){
    return(
        <div className="row MainInfo2 text-center">
            <div className="col-md-3 col-sm-6 col-12">
            <img src={ControlPanel} alt="" className="img-fluid"/>
                <h2>Control</h2>
                <h4>Panel</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae facilis inventore hic blanditiis incidunt aperiam.</p>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
                <img src={Multi_Domain} alt="" className="img-fluid"/>
                <h2>Multi-Domain</h2>
                <h4>Hosting</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae facilis inventore hic blanditiis incidunt aperiam.</p>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
                <img src={FTP} alt="" className="img-fluid"/>
                <h2>FTP</h2>
                <h4>Service</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae facilis inventore hic blanditiis incidunt aperiam.</p>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
                <img src={Direct} alt="" className="img-fluid"/>
                <h2>Direct</h2>
                <h4>Support</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae facilis inventore hic blanditiis incidunt aperiam.</p>
            </div>
        </div>
    
    )
}

export default MainInfo2
