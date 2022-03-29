import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
    render() {
        const items = this.props.data
        const sub = this.props.sub
        const oneItem = items.map((item, index) => {
            return(
                <span className="key" key={index}>
                    { sub ? <a className="item" key={index} href={item.url} target="_blank" rel="noreferrer">
                        <div>
                            <p dir="auto">{index+1}&#41; {item.topic}</p>
                        </div>
                    </a> : <NavLink className="item" key={index} to={`/${item.url}`}>
                        <div>
                            <p>{index+1}&#41; {item.topic}</p>
                            <span>{item.content.length}</span>
                        </div>
                    </NavLink> }
                </span>
            )
        })
        return (
            <div className="key" data-aos="fade-right">
                {oneItem}
            </div>
        )
    }
}

export default Item;