import React from "react";
import "./Layout.css";

export const NavBar = (props) => (

<nav className="navbar">
<ul>
    <li className="brand"><a href="/">Image Clicker Game</a></li>
    <li>  {props.navState.gameStatus}</li>
    <li> Score:{props.navState.score} | Top Score: {props.navState.topScore}</li>
  {/* <li className={props.navState.effect || "normal"}>{props.navState.gameStatus}</li> */}
</ul>
</nav>
);


export const Header = () => (
<header className="header">
<h1 className="title"> Image Clicker</h1>
<h3>Click on an image but don't click the same one twice</h3>
</header>

);

export const Main = (props) => (
    <main className={props.effect || "container"}>
    {props.children}
</main >
    
   );

export const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <p>ImageClicker</p>
        </div>
    </footer>
)