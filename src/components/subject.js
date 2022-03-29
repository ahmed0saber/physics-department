import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NoPage from "./nopage"
import Item from './item'


class SubjectPage extends Component {
    state = {
        subjects: [],
        subject: {},
        found: false
    }

    componentDidMount() {
        fetch("https://ahmed0saber.github.io/physics-department/physics.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                subjects: data
            })
            const id = this.props.params.id
            for(let i=0; i<this.state.subjects.length; i++){
                if(this.state.subjects[i].url === id){
                    this.setState({
                        subject: this.state.subjects[i],
                        found: true
                    })
                }
            }
        })
    }

    render(){
        return (
        <>
            { this.state.found ? <div className="key" data-aos="fade-right">
                <div className="back">
                    <NavLink to="/">Back</NavLink>
                    <NavLink to={`/contact/${this.state.subject.url}`}>Add</NavLink>
                </div>
                <h3>{this.state.subject.id}&#41; {this.state.subject.topic}</h3>
                <Item data={this.state.subject.content} sub={true}/>
            </div> : <NoPage/> }
        </>
        )
    }
}

const Subject = (props) => {
    const param = useParams()
    const data = props.data

    return (
        <SubjectPage params={param} data={data}/>
    )
}

export default Subject;