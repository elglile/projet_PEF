
import { useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";



import Content from "./pages/welcome/Content";
import Footer from "./pages/welcome/footer";
import Nav from "./pages/welcome/nav";
import ReactDOM from 'react-dom';
import { Register } from "./pages/Register/Register";

// import Alertt from './Components/test/Alertt';
// import Acceuil from "./Components/test/Acceuil";
// import Post from "./Pages/Post/Post";
// import PostPublication from "./Pages/PostAff/PostPublication";
// import ProfilStudent from "./Components/Pages/StudentProfil";
// import CreatePost from "./Components/Pages/post";


import './App.css'
import './css/mbr-additional.css'
// import './css/styleAll.css';
// import '../src/Components/test/style2.css';

// import '../public/assets/bootstrap/css/bootstrap.min.css';
import './bootstrap/css/bootstrap.min.css';
import Acceuil from "./pages/Acceuil";
import ProfilStudent from "./pages/profil";
import CreatePost from "./pages/post";
import PostPublication from "./pages/PostPublication";






export default function App() {
  return (
    <div className="App">
      
<Routes>
  
<Route path="/" element={<Content/>} />
<Route path="/Register" element={<Register/>} />

  {/* <Route path="/C" element={<Content/>} /> */}
  <Route path="/acceuil" element={<Acceuil/>} />
  <Route path="/Profil" element={<ProfilStudent/>} />
  <Route path="/CreatePost" element={<CreatePost/>} />
  {/* <Route path="/Post" element={<Post/>} /> */}
  <Route path="/PostPub" element={<PostPublication/>} />


  


</Routes>
    </div>
  );
}
