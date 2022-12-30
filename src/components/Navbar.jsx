import { selectAllNav } from "context/navDataSlice";
import React from "react";
import { useSelector } from "react-redux";
import logo from "svg/logo.svg";
import styled from "scss/navbar.module.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const nav = useSelector(selectAllNav);
  const isNonMobileScreens = useMediaQuery("(min-width: 480px)");
  return (
    <nav className={styled.nav_container}>
      {isNonMobileScreens !== true ? (
        <>
          <div className={styled.nav_container__logo}>
            <img src={logo} alt="" />
            <h1 title={nav.pageName}>{nav.pageName}</h1>
          </div>
          <div className={styled.nav_container__btn}>
            <button type={"button"} title={"get-started"}>
              Get Started
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styled.nav_container__logo}>
            <img src={logo} alt="" />
            <h1 title={nav.pageName}>{nav.pageName}</h1>
          </div>
          <div className={styled.nav_container__navlist}>
            {nav.navList.map((item) => (
              <Link key={item.id} to={item.url} title={item.navName}>
                {item.navName}
              </Link>
            ))}
          </div>
          <div className={styled.nav_container__btn}>
            <button type={"button"} title={"get-started"}>
              Get Started
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
