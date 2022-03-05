import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
    render() {
        const items = this.props.data
        const sub = this.props.sub
        const oneItem = items.map(item => {
            return(
                <>
                    { sub ? <a className="item" key={item.id} href={item.url} target="_blank" rel="noreferrer">
                        <div>
                            <p>{item.id}&#41; {item.topic}</p>
                        </div>
                    </a> : <NavLink className="item" key={item.id} to={`/${item.url}`}>
                        <div>
                            <p>{item.id}&#41; {item.topic}</p>
                        </div>
                    </NavLink> }
                </>
            )
        })
        return (
            <>
                {oneItem}
            </>
        )
    }
}

export default Item;