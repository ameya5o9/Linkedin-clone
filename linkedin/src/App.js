import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 
function App() {
  return (
    <div className="App">

      

      <Router>
    <Header/>
      </Router>
    </div>
  );
}

export default App;
