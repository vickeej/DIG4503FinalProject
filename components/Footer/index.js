import React from "react";
import styles from '../Style.module.css';
import foot from '../img/foot.png';

function Footer() {
  return (
    <div>
    <img src = {foot} alt = "Pokedex Bottom" className = {styles.img}></img>
    </div>
  );
}

export default Footer;
