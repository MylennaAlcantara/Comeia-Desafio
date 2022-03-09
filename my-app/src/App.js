import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {Private} from './pages/Private';
import {Register} from './pages/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Invision</h1>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/SingUp">Sing Up</Link>
        <Link to ="/private">Private</Link>
      </nav>
      </header>
      <hr />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<Private />}/>
        <Route path="/SingUp" element={<Register />}/>
      </Routes>

    </div>
  );
}

export default App;
