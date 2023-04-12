import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserAuthContextProvider } from './components/context/UserAuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </UserAuthContextProvider>

    </div>
  );
}

export default App;