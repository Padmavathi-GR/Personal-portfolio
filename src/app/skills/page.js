export default function SkillsPage() {
  const skills = [
    {
      name: "C Programming",
      description: "Problem solving, loops, functions, arrays and data structures.",
    },
    {
      name: "Python",
      description: "Python fundamentals, functions, dictionaries, sets and file handling.",
    },
    {
      name: "Java",
      description: "Object-oriented programming and basic application development.",
    },
    {
      name: "HTML & CSS",
      description: "Creating structured, responsive and visually appealing websites.",
    },
    {
      name: "JavaScript",
      description: "Programming fundamentals and interactive web development.",
    },
    {
      name: "React & Next.js",
      description: "Building component-based websites with modern web technologies.",
    },
    {
      name: "Git & GitHub",
      description: "Version control and managing software projects.",
    },
    {
      name: "Problem Solving",
      description: "Breaking problems into logical steps and developing solutions.",
    },
  ];

  return (
    <section className="page skills-page">
      <div className="skills-heading">
        <p className="section-label">MY SKILLS</p>

        <h1>Technologies & Skills</h1>

        <p>
          Here are some of the technologies and skills I am learning and
          developing through my engineering studies and projects.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">✦</div>

            <h2>{skill.name}</h2>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}