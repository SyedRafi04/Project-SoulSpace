import React from 'react'
import RootLayOut from './Components/RootLayOut';
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut/>}>
        <Route index path="/home" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
