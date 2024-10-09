import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Rodolfo Guerrero</span>{" "}
            de <span className="purple">Coahuila, México.</span>
            <br />
            Actualmente estudio ingenieria en sistemas.
            <br />
            El conocimiento que he adquirido fue a base de mi mismo,
            si necesitas algo, no dudes en contactarme.
            <br />
            <br />
            ¡Además de programar, hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Salir de fiesta
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>

          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
