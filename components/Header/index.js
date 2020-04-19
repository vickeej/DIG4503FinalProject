import React from "react";
import styles from '../Style.module.css';
import head from '../img/head.png';

function Header() {
  return (
    <div>
    <h1 className = {styles.h1}>The Kalos Pok&eacute;Dex:</h1>
    <img src = {head} alt = "Pokedex Top" className = {styles.img}></img>
    </div>
  );
}

export default Header;
