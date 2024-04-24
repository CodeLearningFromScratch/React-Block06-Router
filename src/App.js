
import './App.css';

import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App"> 

  <Header />
  <Routes>
     <Route path='/home' element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/profile' element={<Profile/>}/>
  </Routes>

    </div>
  );
}

export default App;
