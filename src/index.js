import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Smartphone from './Smartphone';
import SmartPhoneDetails from './SmartPhoneDetails';
import SmartPhoneEdit from './SmartPhoneEdit';
import AddSmartPhone from './AddSmartPhone';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/smartphone' element={<Smartphone/>}></Route>
          <Route path='/smartphone/:id' element={<SmartPhoneDetails/>}></Route>
          <Route path='/smartphone/edit/:id' element={<SmartPhoneEdit/>}></Route>
          <Route path='/smartphone/add' element={<AddSmartPhone/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </>
);


