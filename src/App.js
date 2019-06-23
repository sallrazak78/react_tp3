import React from 'react';
import Navbar from './component/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route  path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
