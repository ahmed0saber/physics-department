import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

class Form extends Component {
    state = {
        topic: '',
        url: '',
        subject: this.props.back.id
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formSubmit = () => {
        if(this.state.topic == '' | this.state.url == '' | this.state.subject == ''){
            alert("Please fill all fields.")
        }else{
            fetch('https://formsubmit.co/ajax/ahmed0saber33@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            })
            .then(response => console.log(response))
            alert("Your request has been sent successfully, Please wait till we review it !");
            this.setState({
                topic: '',
                url: '',
                subject: ''
            })
        }
    }

    render(){
        const back = this.props.back.id ? this.props.back.id : ''
        return (
            <div className="key" data-aos="fade-right">
                <div className="back">
                    <NavLink to={`/${back}`}>Back</NavLink>
                </div>
                <div className="form">
                    <p>Add New Topic</p>
                    <input value={this.state.topic} onChange={this.handleChange} type="text" id="topic" placeholder="Enter the topic, ex: Lecture 5" autoComplete="off"/>
                    <input value={this.state.url} onChange={this.handleChange} type="url" id="url" placeholder="Enter the url, ex: https://www.google.com"  autoComplete="off"/>
                    <input value={this.state.subject} onChange={this.handleChange} type="text" id="subject" placeholder="Enter the subject, ex: Programming"  autoComplete="off"/>
                    <button onClick={this.formSubmit}>Send</button>
                </div>
            </div>
        )
    }
}

const Contact = () => {
    const param = useParams()

    return (
        <Form back={param}/>
    )
}

export default Contact;