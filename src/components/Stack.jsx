import "./Stack.css";
import HTML from "../assets/html-1.svg"
import CSS from "../assets/css-3.svg"
import React from "../assets/React Logo.svg"
import Python from "../assets/python-svgrepo-com.svg"
import JS from "../assets/logo-javascript.svg"
import MYSQL from "../assets/mysql-ar21.svg"
import Node from "../assets/nodejs-icon.svg"
import git from "../assets/git-icon-logo-svgrepo-com.svg"
import TailWind from "../assets/tailwind-svgrepo-com.svg"
import Svelte from "../assets/svelte-1.svg"

export default function Stack() {
    return( 
    <div className="logos-slide"> 
        <img src={HTML}/> 
        <img src={CSS}/> 
        <img src={React}/> 
        <img src={Svelte}/> 
        <img src={JS}/> 
        <img src={TailWind}/> 
        <img src={Python}/> 
        <img src={MYSQL}/> 
        <img src={Node}/> 
        <img src={git}/> 

    </div>
)}