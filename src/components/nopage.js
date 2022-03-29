import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NoPage = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000)
    })

    return (
    <> {loaded ? <>
            <div className="back">
                <NavLink to="/">Back</NavLink>
            </div>
            <h1>Error 404</h1>
            <h1>Page Not Found</h1>
        </>
        : <div data-aos="fade-right" className="loading"></div>}
    </>
    )
}

export default NoPage;