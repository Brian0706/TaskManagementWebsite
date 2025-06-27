import BulletinInfo from './BulletinInfo.js';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (<Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<BulletinInfo />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
