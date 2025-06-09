import "./styles.css.ts";

const body = document.body;

const createLado = (className: string) => {
  const el = document.createElement("div");
  el.className = `lado ${className}`;
  return el;
};

const createScene = (sceneClass: string) => {
  const scene = document.createElement("div");
  scene.className = `scene ${sceneClass}`;
  ["lado-top", "lado-bottom", "lado-behind", "lado-front", "lado-right", "lado-left"]
    .forEach(cls => scene.appendChild(createLado(cls)));
  return scene;
};

const createSide = (sideClass: string) => {
  const side = document.createElement("div");
  side.className = `side ${sideClass}`;
  return side;
};

const createBase = (baseClass: string, center = false) => {
  const base = document.createElement("div");
  base.className = `base ${baseClass}`;
  if (center) base.classList.add("center");
  ["side-1", "side-2", "side-3", "side-4", "side-5"].forEach(cls => {
    base.appendChild(createSide(cls));
  });
  return base;
};

const container = document.createElement("div");
container.className = "container";

container.appendChild(createBase("base-bottom"));
container.appendChild(createBase("center", true));
container.appendChild(createBase("center-top", true));
container.appendChild(createBase("base-top"));

body.appendChild(createScene("scene1"));
body.appendChild(createScene("scene2"));
body.appendChild(container);