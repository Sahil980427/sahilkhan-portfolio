import React from "react";
import Spline from "@splinetool/react-spline";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Touch_3D_Robot.css";

const Touch_3D_Robot = () => {
  const navigate = useNavigate();

  return (
    <div className="robot-container">
      <button className="back-button-robot" onClick={() => navigate("/")}>
        <ChevronLeft size={18} />
        Back to Home
      </button>
      <h1 className="robot-title">Never Leave You</h1>
      <div className="robot-canvas">
        <Spline scene="https://prod.spline.design/IGKNfZYv4PQ6BwUY/scene.splinecode" />
      </div>
    </div>
  );
};

export default Touch_3D_Robot;
