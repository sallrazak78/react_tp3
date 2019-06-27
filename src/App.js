import React from 'react';
import Navbar from './component/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Post from './component/Post'
import Name from './component/Name'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/:post_id' component={false?Post:Name} />
      </div>
    </BrowserRouter>
  );
}

export default App;
