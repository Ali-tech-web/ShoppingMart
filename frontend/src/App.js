import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Login from './screens/LoginScreen'
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/shipping' element={<ShippingScreen/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<RegisterScreen/>}></Route>
            <Route path='/' element={<Homescreen/>} ></Route>
            <Route path='/profile' element={<ProfileScreen/>} ></Route>
            <Route path='/product/:id' element={<ProductScreen/>} ></Route>  
            <Route path='/cart/:id?' element={<CartScreen/>} ></Route>  
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
