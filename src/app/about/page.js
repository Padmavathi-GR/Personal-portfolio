export default function AboutPage() {
  return (
    <section className="page about-page">
      <div className="about-content">
        <p className="section-label">ABOUT ME</p>

        <h1>About Me</h1>

        <p>
          Hello! I am <strong>Padmavathi G R</strong>, an engineering
          student passionate about technology, programming and
          problem-solving.
        </p>

        <p>
          I enjoy learning new technologies and developing practical
          projects that help me improve my technical and creative skills.
          I am particularly interested in software development and
          exploring modern web technologies.
        </p>

        <div className="education-card">
          <h2>Education</h2>

          <div className="education-item">
            <h3>Bachelor of Engineering</h3>
            <p>Sahyadri College of Engineering and Management</p>
            <span>Computer Science & Engineering</span>
          </div>

          <div className="education-item">
            <h3>Pre-University</h3>
            <p>Shakthi PU College</p>
            <span>PCMC</span>
          </div>

          <div className="education-item">
            <h3>School</h3>
            <p>Amrita Vidyalayam</p>
          </div>
        </div>
      </div>
    </section>
  );
}