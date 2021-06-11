import React from "react";
import web from "../src/images/img1.gif";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};
export default Home;
