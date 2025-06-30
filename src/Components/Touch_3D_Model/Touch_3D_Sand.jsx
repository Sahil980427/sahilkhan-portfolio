import React from "react";
import Spline from "@splinetool/react-spline";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Touch_3D_Sand.css";

const Touch_3D_Sand = () => {
  const navigate = useNavigate();

  return (
    <div className="sand-container">
      <button className="back-button-sand" onClick={() => navigate("/")}>
        <ChevronLeft size={18} />
        Back to Home
      </button>
      <h1 className="sand-title">Sand Playground</h1>
      <div className="sand-canvas no-select">
        <Spline scene="https://prod.spline.design/HXmyLKgrxEQ7TIsb/scene.splinecode" />
      </div>
    </div>
  );
};

export default Touch_3D_Sand;
