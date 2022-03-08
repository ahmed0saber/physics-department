import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from './components/item'
import Footer from './components/footer'
import Subject from './components/subject'
import Contact from './components/contact'
import NoPage from "./components/nopage"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    let x = localStorage.getItem("theme") ? parseInt(localStorage.getItem("theme")) : 0
    this.state = {
      items: [
        {
          id:1, topic:'Practical Physics', url:"practical",
          content: [
              {id:1, topic: 'First Lecture', url: "https://www.google.com/"},
              {id:2, topic: 'Second Lecture', url: "https://www.google.com/"},
              {id:3, topic: 'Third Lecture', url: "https://www.google.com/"},
              {id:4, topic: 'Forth Lecture', url: "https://www.google.com/"}
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
      theme: x,
      themes: [
        {
          "pri": "#ffd100",
          "back": "#202020",
          "nav": "#333533",
          "input": "#f7f7f7",
          "placeholder": "#a9a9a9"
        },
        {
          "pri": "#008080",
          "back": "#202020",
          "nav": "#333533",
          "input": "#f7f7f7",
          "placeholder": "#a9a9a9"
        },
        {
          "pri": "#98ff98",
          "back": "#202020",
          "nav": "#333533",
          "input": "#f7f7f7",
          "placeholder": "#a9a9a9"
        },
        {
          "pri": "#660066",
          "back": "#EFBBFF",
          "nav": "#D896FE",
          "input": "#080808",
          "placeholder": "#757575"
        },
        {
          "pri": "#e5383b",
          "back": "#f5f3f4",
          "nav": "#3c3c3c",
          "input": "#f7f7f7",
          "placeholder": "#757575"
        },
        {
          "pri": "#1E91D6",
          "back": "#F0F4EF",
          "nav": "#202C39",
          "input": "#f7f7f7",
          "placeholder": "#757575"
        }
      ]
    }

    document.querySelector(':root').style.setProperty('--pri',this.state.themes[this.state.theme].pri);
    document.querySelector(':root').style.setProperty('--back',this.state.themes[this.state.theme].back);
    document.querySelector(':root').style.setProperty('--nav',this.state.themes[this.state.theme].nav);
    document.querySelector(':root').style.setProperty('--input',this.state.themes[this.state.theme].input);
    document.querySelector(':root').style.setProperty('--placeholder',this.state.themes[this.state.theme].placeholder);
  }

  changeTheme = () => {
    if(this.state.theme>=this.state.themes.length-1){
      this.setState({theme:0})
    }else{
      this.setState({theme:this.state.theme+1})
    }
    localStorage.setItem("theme", this.state.theme);
    document.querySelector(':root').style.setProperty('--pri',this.state.themes[this.state.theme].pri);
    document.querySelector(':root').style.setProperty('--back',this.state.themes[this.state.theme].back);
    document.querySelector(':root').style.setProperty('--nav',this.state.themes[this.state.theme].nav);
    document.querySelector(':root').style.setProperty('--input',this.state.themes[this.state.theme].input);
    document.querySelector(':root').style.setProperty('--placeholder',this.state.themes[this.state.theme].placeholder);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Physics Department 3rd Year 2nd Term</h2>
          <div className="container">
            <Routes>
              <Route path="/" element={<Item data={this.state.items}/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/contact/:id" element={<Contact data={this.state.items}/>} />
              <Route path="/:id" element={<Subject data={this.state.items}/>} />
              <Route path="*" element={<NoPage/>} />
            </Routes>
          </div>
          <button className="fa fa-magic floatingbtn" onClick={this.changeTheme}></button>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;