import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom"
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Welcome Home</h1>}></Route>
        <Route path='/people/:idNumber' element={<People/>}></Route>
        <Route path='/planets/:idNumber' element={<Planets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
