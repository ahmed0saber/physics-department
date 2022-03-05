import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NoPage from "./nopage"
import Item from './item'


class SubjectPage extends Component {
    state = {
        subjects: [
            {
                id:1, topic:'Practical Physics', url:"practical",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:2, topic:'Solid State Physics 2', url:"solid-state",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:3, topic:'Nuclear Physics 3', url:"nuclear",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:4, topic:'Atomic Physics 2', url:"atomic",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:5, topic:'Nuclear Reactor Physics', url:"nuclear-reactor",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:6, topic:'Molecular Spectra', url:"molecular-spectra",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:7, topic:'Electrodynamics', url:"electrodynamics",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            },
            {
                id:8, topic:'Programming 3', url:"programming",
                content: [
                    {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
                    {id:2, topic: 'Second Lecture', url: "https://www.google.com/"}
                ]
            }
        ],
        subject: {},
        found: false
    }

    componentDidMount() {
        const id = this.props.params.id
        for(let i=0; i<this.state.subjects.length; i++){
            if(this.state.subjects[i].url === id){
                this.setState({
                    subject: this.state.subjects[i],
                    found: true
                })
            }
        }
    }

    render(){
        return (
        <>
            { this.state.found ? <>
                <div className="back">
                    <NavLink to="/">Back</NavLink>
                    <NavLink to="/contact">Add</NavLink>
                </div>
                <h3>{this.state.subject.id}&#41; {this.state.subject.topic}</h3>
                <Item data={this.state.subject.content} sub={true}/>
            </> : <NoPage/> }
        </>
        )
    }
}

const Subject = (props) => {
    const param = useParams()
    console.log(param)

    return (
        <SubjectPage params={param}/>
    )
}

export default Subject;