// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/home';
import Community from './components/community';
import Mypage from './components/mypage';

// import style
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div className='Menu-wrapper'>
          <ul>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/community'><li>Community</li></Link>
            <Link to='/mypage'><li>MyPage</li></Link>
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/community' component={Community} />
            <Route exact path='/mypage' component={Mypage} />
          </Switch>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;