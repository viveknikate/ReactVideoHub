import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CustomFooter from './components/Footer.jsx';
import CustomNavigator from './components/Header.jsx';

import HomePage from './components/Home';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Upload from './components/Upload.jsx';
import Videos from './components/Videos.jsx';

function App() {
  return (
    <Router>
      <CustomNavigator />
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <CustomFooter />
    </Router>
  );
}

export default App;
