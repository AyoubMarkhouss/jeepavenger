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
        <Link href="https://www.instagram.com/declic_agency/" about="instagram">
          <FaInstagram size={26} color="white" />
        </Link>
        <Link href="https://web.facebook.com/declicagency" about="facebook">
          <FaFacebookSquare size={26} color="white" />
        </Link>
        <Link href="https://www.youtube.com/@declicagency1334" about="youtube">
          <FaYoutube size={26} color="white" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/declic-agency/"
          about="linkedin"
        >
          <FaLinkedin size={26} color="white" />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
