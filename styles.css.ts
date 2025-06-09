/* styles.css.ts */
import { style, globalStyle, keyframes } from "@vanilla-extract/css";

// Global reset and base styles
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  WebkitTapHighlightColor: "transparent"
});

globalStyle("html", {
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  scrollbarColor: "white transparent"
});

globalStyle("body", {
  height: "100dvh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#000",
  transformStyle: "preserve-3d",
  perspective: "10000px",
  overflow: "hidden"
});

globalStyle(".scene", {
  position: "fixed",
  inset: 0,
  transformStyle: "preserve-3d",
  perspective: "10000px"
});

globalStyle(".scene.pause", {
  animationPlayState: "paused !important"
});

globalStyle(".lado", {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  backfaceVisibility: "hidden",
  backgroundColor: "transparent !important",
  backgroundImage: "url('assets/pattern.jpg')",
  backgroundSize: "20vw",
  backgroundPosition: "center"
});

globalStyle("@media (width <= 1111px)", {
  [".lado"]: {
    backgroundSize: "20vw 15vw"
  }
});

globalStyle(".lado.lado-front", {
  backgroundImage: "none !important"
});

globalStyle(".lado.lado-behind", {
  backgroundColor: "#0f08",
  transform: "translateZ(-100vw)"
});

globalStyle(".lado.lado-right", {
  right: 0,
  backgroundColor: "#00f8",
  transformOrigin: "100% 100%",
  transform: "rotateY(-90deg)"
});

globalStyle(".lado.lado-left", {
  backgroundColor: "#f0f8",
  transformOrigin: "0% 0%",
  transform: "rotateY(90deg)"
});

globalStyle(".lado.lado-top", {
  backgroundColor: "#f008",
  transformOrigin: "50% 0%",
  width: "100vw",
  height: "100vw",
  top: 0,
  transform: "rotateX(-90deg)"
});

globalStyle(".lado.lado-bottom", {
  backgroundColor: "#ff08",
  transformOrigin: "50% 100%",
  width: "100vw",
  height: "100vw",
  bottom: 0,
  transform: "rotateX(90deg)"
});

const animateScene1 = keyframes({
  from: { transform: "perspective(10000px) rotateY(0deg)" },
  to: { transform: "perspective(10000px) rotateY(360deg)" }
});

globalStyle(".scene.scene1", {
  transform: "perspective(10000px) rotateY(90deg)",
  animation: `${animateScene1} 30s linear infinite both`
});

const animateScene2 = keyframes({
  from: { transform: "perspective(10000px) rotate(180deg) scaleZ(-1) rotateY(0deg)" },
  to: { transform: "perspective(10000px) rotate(180deg) scaleZ(-1) rotateY(360deg)" }
});

globalStyle(".scene.scene2", {
  transform: "perspective(10000px) scaleX(-1) rotateY(90deg)",
  animation: `${animateScene2} 30s linear infinite both`
});

globalStyle(".container", {
  width: "150px",
  height: "120px",
  position: "relative",
  animation: `rotar 8s linear infinite alternate`,
  transformStyle: "preserve-3d",
  perspective: "10000px",
  zoom: 0.3
});

globalStyle(".container.pause", {
  animationPlayState: "paused"
});

globalStyle(".base", {
  width: "100%",
  height: "100%",
  position: "absolute",
  transformStyle: "preserve-3d",
  perspective: "10000px"
});

globalStyle(".side", {
  width: "100%",
  height: "100%",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  position: "absolute",
  transformOrigin: "50% 100%"
});

globalStyle(".side::before", {
  content: "''",
  position: "absolute",
  display: "block",
  width: "100%",
  height: "100%",
  inset: 0,
  pointerEvents: "none",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  backgroundImage: "linear-gradient(to right bottom, gold, mediumpurple, cyan)",
  filter: "blur(20px)"
});

globalStyle(".side.side-1", {
  transform: "rotateX(31deg)"
});

globalStyle(".side.side-2", {
  transform: "translate(99px, -71px) rotate(-72deg) rotateX(31deg)"
});

globalStyle(".side.side-3", {
  transform: "translate(-99px, -71px) rotate(72deg) rotateX(31deg)"
});

globalStyle(".side.side-4", {
  transform: "translate(-61px, -187px) rotate(144deg) rotateX(31deg)"
});

globalStyle(".side.side-5", {
  transform: "translate(61px, -187px) rotate(-144deg) rotateX(31deg)"
});

globalStyle(".base-bottom", {
  bottom: 0
});

globalStyle(".center .side", {
  transform: "rotateX(-90deg)"
});

globalStyle(".center-top", {
  transformOrigin: "50% 50%",
  transform: "translateZ(120px) scaleZ(-1)"
});

globalStyle(".center-top .side", {
  transform: "rotateX(-90deg)"
});

globalStyle(".base-top", {
  top: "0px",
  transform: "translateZ(120px) scaleZ(-1)"
});

const rotar = keyframes({
  from: {
    transform: "rotateX(0deg) rotateY(0deg)"
  },
  to: {
    transform: "rotateX(359deg) rotateY(359deg)"
  }
});

globalStyle("@keyframes rotar", rotar);
