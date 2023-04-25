import React, { Component } from 'react'
import Header from './Components/Header'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './Pages/Index'
import About from './Pages/About'
import Contact from './Pages/Contact'

 class App extends Component {

  render() {
    return (
      <div>     

        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
