import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const [active, setActive] = useState(false);
  const activateNav = () => {
    setActive(!active);
  };
  return (
    <div className={active ? "header" : "headerMobile}"}>
      <div className="menuIcon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>
      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li className="liItem">
            <CgProfile className="icon"></CgProfile>
            <Link to="/" className="link">
              Profile
            </Link>
          </li>
          <li className="liItem">
            <RiHeart3Line className="icon"></RiHeart3Line>
            <Link to="/" className="link">
              Front-end
            </Link>
          </li>
          <li className="liItem">
            <RiHeart3Fill className="icon"></RiHeart3Fill>
            <Link to="/" className="link">
              Back-end
            </Link>
          </li>
          <li className="liItem">
            <TbHeartHandshake className="icon"></TbHeartHandshake>
            <Link to="/" className="link">
              Comune
            </Link>
          </li>
          <li className="liItem">
            <FiLogOut className="icon"></FiLogOut>
            <Link to="/" className="link">
              LogOut
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
