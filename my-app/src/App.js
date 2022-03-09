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
        <Link className="link" to = "/">Home</Link>
        <Link className="link" to = "/SignUp">Sign Up</Link>
        <Link className="link" to ="/private">Private</Link>
      </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<Private />}/>
        <Route path="/SingUp" element={<Register />}/>
      </Routes>

    </div>
  );
}

export default App;
