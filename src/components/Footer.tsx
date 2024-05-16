import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center h-20 bg-black">
      <div></div>
      <div className="flex items-center justify-evenly">
        <Link href="#" about="instagram">
          <FaInstagram size={26} color="white" />
        </Link>
        <Link href="#" about="facebook">
          <FaFacebookSquare size={26} color="white" />
        </Link>
        <Link href="#" about="youtube">
          <FaYoutube size={26} color="white" />
        </Link>
        <Link href="#" about="linkedin">
          <FaLinkedin size={26} color="white" />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
