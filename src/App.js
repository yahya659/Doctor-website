import "./App.css";

import { Fragment } from "react";
import Home from "./component/Pages/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./component/Layout/Layout";
import { createHashRouter, RouterProvider } from "react-router";
import Contact from "./component/Pages/Contact";
import Buner from "./component/Bunerabout/Buner";
import Blog from "../src/component/Blog/Blog";
import ContactRE from "./component/ContacRE";
import Ourtem from "./component/Ourteam/Ourtem";
import Services from "./component/Services/Services";

// import About from "./component/About/About";

const ruotes = createHashRouter( //createBrowserRouter
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/baunerabout" element={<Buner />} />
      <Route path="/Register" element={<ContactRE />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Ourtem />} />
      <Route path="/Regist" element={<ContactRE />} />
      <Route path="/services" element={<Services />} />
    </Route>
  )
);
function App() {
  return (
    <Fragment>
      <RouterProvider router={ruotes} />
    </Fragment>
    // <Fragment>
    //   <Navbar />
    //   <Home/>
    //   <Footer/>
    // </Fragment>
  );
}

export default App;
