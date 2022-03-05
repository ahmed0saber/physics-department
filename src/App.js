import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from './components/item'
import Footer from './components/footer'
import Subject from './components/subject'
import Contact from './components/contact'
import NoPage from "./components/nopage"
import './App.css'

class App extends Component {
  state = {
    items: [
      {id:1, topic:'Practical Physics', url:"practical"},
      {id:2, topic:'Solid State Physics 2', url:"solid-state"},
      {id:3, topic:'Nuclear Physics 3', url:"nuclear"},
      {id:4, topic:'Atomic Physics 2', url:"atomic"},
      {id:5, topic:'Nuclear Reactor Physics', url:"nuclear-reactor"},
      {id:6, topic:'Molecular Spectra', url:"molecular-spectra"},
      {id:7, topic:'Electrodynamics', url:"electrodynamics"},
      {id:8, topic:'Programming 3', url:"programming"}
    ]
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
              <Route path="/:id" element={<Subject/>} />
              <Route path="*" element={<NoPage/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
