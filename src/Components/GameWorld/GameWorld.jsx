import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Play,
  Gamepad2,
  Rocket,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";
import "./GameWorld.css";

const GameWorld = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      rotation: Math.random() * 360,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.1 + 0.02,
    }));
    setBackgroundShapes(shapes);
    setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const animateShapes = () => {
      setBackgroundShapes((prev) =>
        prev.map((shape) => ({
          ...shape,
          rotation: shape.rotation + shape.speed * 0.5,
          y:
            shape.y + shape.speed * 0.02 > 100
              ? -10
              : shape.y + shape.speed * 0.02,
        }))
      );
    };

    const shapeInterval = setInterval(animateShapes, 50);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(shapeInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const createParticles = (x, y, color) => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      color,
      life: 1,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 2000);
  };

  const handleCardClick = (gameId, event) => {
    setClickedCard(gameId);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    createParticles(x, y, gameId === "sand" ? "#fbbf24" : "#8b5cf6");

    setTimeout(() => {
      if (gameId === "sand") {
        navigate("/sand");
      } else if (gameId === "never-leave") {
        navigate("/never-leave");
      }
      setClickedCard(null);
    }, 800);
  };

  const games = [
    {
      id: "sand",
      title: "Sand Playground",
      subtitle: "Creative Sandbox",
      description:
        "Build, sculpt, and create in an infinite world of possibilities",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      glowColor: "rgba(251, 191, 36, 0.4)",
      icon: Sparkles,
      features: [
        "Unlimited creativity make cyclone",
        "Physics simulation",
        "Wind creations",
      ],
    },
    {
      id: "never-leave",
      title: "Never Leave You",
      subtitle: "Emotional Journey",
      description:
        "An immersive narrative experience about connection and adventure",
      gradient: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
      glowColor: "rgba(139, 92, 246, 0.4)",
      icon: Heart,
      features: [
        "Hide your mouse in Screen",
        "Never endings",
        "Character bonds",
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="game-container"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "scale(1)" : "scale(0.95)",
      }}
    >
      <div
        className="background-overlay"
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />

      {backgroundShapes.map((shape) => (
        <div
          key={shape.id}
          className="background-shape"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`,
            opacity: shape.opacity,
          }}
        />
      ))}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            background: particle.color,
            transform: `translate(${particle.vx * 20}px, ${
              particle.vy * 20
            }px)`,
          }}
        />
      ))}

      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ChevronLeft />
          Back to Menu
        </button>
      </div>

      <div className="main-content">
        <div className="title-section">
          <div className="icon-group">
            <Gamepad2 className="pulse-icon" />
            <Rocket className="bounce-icon" />
          </div>
          <h1 className="page-title">Choose Your Adventure</h1>
          <p className="page-subtitle">
            Immerse yourself in premium interactive experiences crafted for you
          </p>
        </div>

        <div className="game-cards">
          {games.map((game, index) => {
            const Icon = game.icon;
            const isHovered = hoveredCard === game.id;
            const isClicked = clickedCard === game.id;
            return (
              <div
                key={game.id}
                className={`game-card ${isHovered ? "hovered" : ""} ${
                  isClicked ? "clicked" : ""
                }`}
                style={{ transitionDelay: `${0.8 + index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(game.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={(e) => handleCardClick(game.id, e)}
              >
                <div
                  className="card-glow"
                  style={{
                    background: game.gradient,
                    opacity: isHovered ? 0.6 : 0,
                  }}
                />
                <div
                  className="card-content"
                  style={{
                    boxShadow: isHovered ? `0 25px 50px ${game.glowColor}` : "",
                  }}
                >
                  <div
                    className="card-bg"
                    style={{
                      background: game.glowColor,
                      opacity: isHovered ? 0.3 : 0,
                    }}
                  />
                  <div
                    className="icon-box"
                    style={{ background: game.gradient }}
                  >
                    <Icon />
                  </div>
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-subtitle">{game.subtitle}</p>
                  <p className="game-description">{game.description}</p>
                  <div className="feature-list">
                    {game.features.map((feature, i) => (
                      <div className="feature-item" key={i}>
                        <Star />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    className="launch-button"
                    style={{ background: game.gradient }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(game.id, e);
                    }}
                  >
                    {isClicked ? <div className="loader" /> : <Play />}
                    {isClicked ? "Launching..." : "Launch Experience"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="footer-note">
          ✨ Premium interactive experiences • Built with cutting-edge
          technology I am kidding
        </div>
      </div>
    </div>
  );
};

export default GameWorld;
