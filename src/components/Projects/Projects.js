import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Importa la imagen de Skallcraft
import skallcraftImg from "../../Assets/Projects/skallcraft.png"; // Cambia esto según la ubicación de tu imagen

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay un proyecto en el que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skallcraftImg} // Cambia esto según la imagen que uses
              isBlog={false}
              title="Skallcraft"
              description="Actualmente soy el CEO del servidor SkallCraft"
              ghLink="https://github.com/SkallCraft" // Cambia esto con tu enlace de GitHub
              demoLink="https://www.skallcraft.com" // Cambia esto con tu enlace de demostración
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
