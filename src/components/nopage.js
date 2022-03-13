import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NoPage extends Component {
    render(){
        return (
        <>
            <div className="back">
                <NavLink to="/">Back</NavLink>
            </div>
            <h1>Error 404</h1>
            <h1>Page Not Found</h1>
        </>
        )
    }
}

export default NoPage;