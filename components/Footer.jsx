import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 RYUZEN All rights reserved</p>
      <p className="icons">
        <Link href="https://www.instagram.com/matthewraymond_dev/">
          <AiFillInstagram style={{ cursor: "pointer" }} />
        </Link>
        <Link href="https://twitter.com/MatthewRay03">
          <AiOutlineTwitter style={{ cursor: "pointer" }} />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
