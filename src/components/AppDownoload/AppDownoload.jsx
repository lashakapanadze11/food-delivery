import React from "react";
import "./AppDownoload.css";
import { assets } from "../../assets/assets";

const AppDownoload = () => {
  return (
    <div className="app-downoload" id="app-downoload">
      <p>
        For Better Experience Downoload <br />
        Tomato App
      </p>
      <div className="app-downoload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownoload;
