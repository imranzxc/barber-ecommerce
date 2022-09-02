import React from "react";
import styles from "./Header.module.css";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";


const Header = () => {
  return (
    <div className={styles.Header_container}>
      <div className={styles.menu_person_container}>
        <span>
          <AiOutlineMenu />
        </span>
        <span>
          <BsPersonFill />
        </span>
      </div>
      <div className={styles.logo_container}>
        <img src="https://barberblades.co.uk/static/version1644930240/frontend/Bigeyedeers/default/en_GB/images/logo.svg" />
      </div>
      <div className={styles.basket_container}>
       <span>
       <BiShoppingBag />
        </span> 
      </div>
    </div>
  );
};

export default Header;
