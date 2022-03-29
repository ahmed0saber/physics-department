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
    super(props)
    let x = localStorage.getItem("theme") ? parseInt(localStorage.getItem("theme")) : 0
    this.state = {
      items: [],
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

  componentDidMount(){
    fetch("https://ahmed0saber.github.io/physics-department/physics.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data
        })
      })
      document.getElementsByClassName("floatingbtn")[0].click()
  }

  changeTheme = () => {
    if(this.state.theme>=this.state.themes.length-1){
      this.setState({theme:0})
    }else{
      this.setState({theme:this.state.theme+1})
    }
    localStorage.setItem("theme", this.state.theme)
    document.querySelector(':root').style.setProperty('--pri',this.state.themes[this.state.theme].pri)
    document.querySelector(':root').style.setProperty('--back',this.state.themes[this.state.theme].back)
    document.querySelector(':root').style.setProperty('--nav',this.state.themes[this.state.theme].nav)
    document.querySelector(':root').style.setProperty('--input',this.state.themes[this.state.theme].input)
    document.querySelector(':root').style.setProperty('--placeholder',this.state.themes[this.state.theme].placeholder)
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Physics Department 3rd Year 2nd Term</h2>
          <div className="container">
            <Routes>
              <Route path="/" element={<Item data={this.state.items}/>} />
              <Route path="/:id" element={<Subject data={this.state.items}/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/contact/:id" element={<Contact data={this.state.items}/>} />
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