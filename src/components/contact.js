import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Contact extends Component {
    state = {
        topic: '',
        url: '',
        subject: ''
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
            fetch('https://formsubmit.co/ajax/c1e4b2ec6aff10bba2bedcf72557a8cc', {
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
        return (
            <>
                <div className="back">
                    <NavLink to="/">Back</NavLink>
                </div>
                <div className="form">
                    <p>Add New Topic</p>
                    <input value={this.state.topic} onChange={this.handleChange} type="text" id="topic" placeholder="Enter the topic, ex: Lecture 5" autoComplete="off"/>
                    <input value={this.state.url} onChange={this.handleChange} type="url" id="url" placeholder="Enter the url, ex: https://www.google.com"  autoComplete="off"/>
                    <input value={this.state.subject} onChange={this.handleChange} type="text" id="subject" placeholder="Enter the subject, ex: Programming"  autoComplete="off"/>
                    <button onClick={this.formSubmit}>Send</button>
                </div>
            </>
        )
    }
}

export default Contact;