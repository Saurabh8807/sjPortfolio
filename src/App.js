import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashbaord from './document/Dashboard/Dashbaord';
import Animation from './document/Animation/Animation';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Animation />} />
          <Route path="/Dashboard" element={<Dashbaord />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
