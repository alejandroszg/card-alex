import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="./Yo.JPG" className="avatar" alt="Alejandro Sánchez" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Alejandro Sánchez</h1>
      <p>
        Frontend Developer and Tech lover. When I'm not coding, I like to watch
        some football or Formula 1. I'm from Venezuela but living in Chile.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="lightblue" />
      <Skill skill="HTML+CSS" color="orange" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="Angular" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
