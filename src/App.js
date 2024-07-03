import { Route, Router, Routes } from "react-router-dom";

import Content from "./Pages/welcome/Content";
import Footer from "./Pages/welcome/footer";

import { Register } from "./Pages/Register/Register";

import "./App.css";
import "./css/mbr-additional.css";

import {ProfileCard, PageAdmin , SignIn, NavAdmin} from './Admin/AdminPage';
import "./bootstrap/css/bootstrap.min.css";
import { Acceuil } from "./Pages/Acceuil";
import ProfilStudent from "./Pages/profil";
import  {CreatePost, UpdatePost } from "./Pages/post";
import PostPublication from "./Pages/PostPublication";
import Contact_us from "./Pages/Contact_us";
import Alerts from "./Pages/welcome/Notify";
import Notification from "./Pages/welcome/notification";
import Navbar from "./Pages/welcome/Navbar";
import Chatboot from "./Chat";

export default function App() {
  return (
    <div className="App">
      
      <Chatboot/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content />
              <Footer />
            </>
          }
        />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/acceuil"
          element={
            <>
              <Navbar />
              <Acceuil /> 
              <Footer />
            </>
          }
        />
        <Route path="/Contact_us" element={            
            <>
              <Navbar />
              <Contact_us />
              <Footer />
            </>
          } />
        <Route path="/Profil" element={
                    <>
                    <Navbar />
                    <ProfilStudent />
                    {/* <Footer /> */}
                  </>
                } />
        <Route path="/CreatePost" element={
        <>
                    <Navbar />
                    <CreatePost />
                    {/* <Footer /> */}
                  </>
                } />
        <Route path="/UpdatePost" element={
        <>
                    <Navbar />
                    <UpdatePost />
                    {/* <Footer /> */}
                  </>
                } />
        <Route path="/PostPub" element={
        <>
        <Navbar />
        <PostPublication />
        <Footer />
      </>
        } />
        <Route path="/Notify" element={<Alerts />} />
        
        <Route path="/es-admin/Dashbord" element={<PageAdmin />} />
        {/* <Route path="/es-admin" element={<SignIn/>} /> */}
        <Route path="/es-admin" element={<>
        <SignIn/>
        </>} />
        <Route path="/es-admin/Profil" element={<>
        <NavAdmin/>
        <ProfileCard/>
        </>} />



        {/* <Route path="/Notification" element={<Notification />} /> */}
      </Routes>
    </div>
  );
}
