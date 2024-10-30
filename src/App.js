import React from "react"
import './style.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

    return(

        <div className="container">

            <div className="container TopBar">
                <Header />
            </div>
            
            <div className="container Body">
                <Body />
            </div>
            
        </div>
        
    )
}

export default App;

