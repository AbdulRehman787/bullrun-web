import React from "react";
import {Routes, Route} from "react-router-dom";
import Blog from "./Component/Pages/Blog.js";        
import Community from './Component/Pages/Community';
import CommdityPage from './Component/Pages/CommdityPage';                                    
import AlternativePick from '../src/Component/Pages/AlternativePick';
import PortFolio from './Component/Pages/CoinInfo';
import ExculsiveResearch from './Component/Pages/ExculsiveResearch';
import SignUp from "./Component/registration/Signup";
import Login from "./Component/registration/Login";
import Admin from "./Component/Admin/Admin";
import MainHome from "./Component/Pages/MainHome";
import Home from "./Component/Pages/Home";
import CoinInfo from "./Component/Pages/CoinInfo";
import Homes from './website/Homes';

const App =()=> {
  return (
    <>
    <Routes>
    <Route path="/" exact element={ <Homes /> } /> 
    <Route path="/Component/Pages/MainHome" exact element={ <MainHome /> } /> 
    <Route path="/Pages/Blog" element={ <Blog/> } />
    <Route path="/Pages/AlternativePick" element={ <AlternativePick/> } />
    <Route path="/Pages/CommdityPage" element={<Community />} />
    <Route path="/Pages/CommdityPage" element={<CommdityPage/>} />
    <Route path="/Pages/PortFolio" element={<PortFolio/>} />
    <Route path="/Pages/ExculsiveResearch" element={<ExculsiveResearch />}/>
    <Route path="/registration/Signup" element={<SignUp />}/>
    <Route path="/registration/login" element={<Login />}/>
    <Route path="/Admin/admin" element={<Admin />}/>
    <Route path="/Pages/Home" element={<Home />}/>
    <Route path="/Pages/CoinInfo" element={<CoinInfo />}/>
    <Route path="/Pages/CoinInfo" element={<CoinInfo />}/>
    </Routes>
    </>
  );
}

export default App;
