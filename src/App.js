import React from "react"
import './style.css'
import Header from './components/Header'
import MainInfo1 from './components/MainInfo1'
import MainInfo2 from "./components/MainInfo2"
import Maininfo3 from "./components/Maininfo3"

function App() {

    return(

        <div className="container">

            <div className="container TopBar">
                <Header />
            </div>
            
            <div className="container Body">
                <MainInfo1 />
                <MainInfo2 />
                <Maininfo3 />
            </div>
            
        </div>
        
    )
}

export default App;

