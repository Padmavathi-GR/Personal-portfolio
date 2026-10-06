function ProjectCard({ title, description, technology, number }) {
  return (
    <div className="project-card">
      <div className="project-number">
        {String(number).padStart(2, "0")}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <span className="project-tech">{technology}</span>
    </div>
  );
}

export default ProjectCard;