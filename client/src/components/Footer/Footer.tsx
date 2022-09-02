import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.columns_container}>
        <div>
          <ul>
            <li>ABOUT</li>
            <li>REWARDS</li>
            <li>EVENTS</li>
            <li>T&C</li>
            <li>PRIVACY</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>TRADE</li>
            <li>ACCOUNT</li>
            <li>DELIVERY</li>
            <li>RETURNS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>NEW IN</li>
            <li>BRANDS</li>
            <li>SPECIALS</li>
            <li>CLIPPER FAULTS HELP</li>
            <li>FINANCE LEASING</li>
          </ul>
        </div>
        <div className={styles.networks_mail_container}>
          <h4>FOLLOW US</h4>
          <ul className={styles.networks_container}>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        <h4>NEWSLETTER</h4>
        <div className={styles.input_container}>
          <input type="text" placeholder="Enter your email address" />
          <div>
          <button>SUBSCRIBE</button>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.underline_titles_container}>
        <ul>
          <li>Barber Blades © 2022</li>
          <li> Registered in England and Wales no. 7264822 </li>
          <li>VAT no. 123 7418 29</li>
          <li>Store by Big Eye Deers</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
