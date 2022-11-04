import Navbar from "./components/Navbar.js";

import Footer from "./components/Footer.js";

import "./App.css";
import Contentarea from "./components/Contentarea.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home.js";
import Discussion from "./components/Discussion.js";



function App() {

  return (
    <Router>
      <div className="App">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="content-area-box">
          <div class="nav-container">
            <ul class="nav-list">
              <li class="nav-item">
                <Link class="nav-link gb-hover" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link gb-hover" to="/discussion">Discussion</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link gb-hover" to="/characters">Characters</Link>
              </li>

            </ul>
          </div>

          <div class="dis-container">
            <Routes>
              <Route exact path='/discussion' element={<Discussion />}></Route>
              <Route exact path='/home' element={< Home />}></Route>
              <Route exact path='/characters' element={< Contentarea />}></Route>
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router >
  );
}

export default App;
