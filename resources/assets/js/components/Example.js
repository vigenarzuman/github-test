import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Example extends Component {
    render() {
        return ( 
            <div className = "container" >
                <div>dsfgasfghsdafhgasdfh</div>
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render( < Example / > , document.getElementById("app"));
}