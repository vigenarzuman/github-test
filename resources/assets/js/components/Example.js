import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "./search";

export default class Example extends Component {
    render() {
        return ( 
            <div className = "container" >
                <Search/>
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render( < Example / > , document.getElementById("app"));
}