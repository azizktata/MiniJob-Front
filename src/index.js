/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import UserLayout from "layouts/User.js";
import UserProfileLayout from "layouts/UserProfile";
import CompaniesLayout from "layouts/Companies.js";
import JobsLayout from "layouts/JobsListing.js"
import { useState , useEffect } from "react";

import axios from "axios";
import BrowseJ from "layouts/BrowseJ/BrowseJ";
import Browse from "layouts/BrowseC/Browse";



const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(

 /* useEffect(()=>{
    async function getClients(){
      try{
        const response = await axios.get("http://localhost:8282/api/v1/clients")
        console.log(response.data);
        setClients(response.data)
        
      }
      catch(error){
        console.log(error)
      }
    }
    getClients();
  },[])*/
  <BrowserRouter>
 <Switch>
 <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/user" render={(props) => <UserLayout {...props} />} />
      <Route path="/companies" render={(props) => <Browse {...props} />} />
      <Route path="/userprofile" render={(props) => <UserProfileLayout {...props} />} />
      <Route path="/jobs" render={(props) => <BrowseJ {...props} />} />
      <Redirect from="/" to="/auth/login" />
        </Switch>
  </BrowserRouter>
);
