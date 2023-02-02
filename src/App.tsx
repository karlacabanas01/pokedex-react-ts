
import { Routes, Route } from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import Listado from './pages/Listado';
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Listado/>} />
          </Routes>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
