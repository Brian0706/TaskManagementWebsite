import { useState } from 'react';
import BulletinInfo from './BulletinInfo.js';
import Home from './Home.js'
import Navbar from './Navbar.js';
import Login from './Login.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form } from 'react-router-dom';
import CreateLogin from './CreateLogin.js';

function App() {
  const [states, setStates] = useState(["Finished", "Ongoing", "On Hold", "Not Started"])
  const [user, setUser] = useState(null)
  return (<Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/:name" element={<div>
          <Navbar user={user} setUser={setUser} />
          <Home allStatuses={states} />
        </div>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/create-login" element={<CreateLogin />} />
        <Route path="/tasks/:name/:id" element={<div>
          <Navbar user={user} setUser={setUser} />
          <BulletinInfo allStates={states} />
        </div>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
