import ProjectCard from "../../Components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Student Management Portal",
      description:
        "A web-based application designed to organize and manage student information in a simple and user-friendly way.",
      technology: "React",
    },
    {
      title: "Farmer Financial Support Project",
      description:
        "A design thinking project focused on reducing financial burden and debt-related difficulties faced by small and marginal farmers.",
      technology: "Design Thinking",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website developed to showcase my skills, projects, education and achievements.",
      technology: "Next.js",
    },
    {
      title: "Python Mini Projects",
      description:
        "A collection of Python applications created while learning programming, including a Todo List, Quiz Game and Contact Manager.",
      technology: "Python",
    },
  ];

  return (
    <section className="page projects-page">
      <div className="projects-heading">
        <p className="section-label">MY WORK</p>

        <h1>Featured Projects</h1>

        <p>
          Here are some of the projects I have worked on during my
          engineering journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technology={project.technology}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}