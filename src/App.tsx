function App() {
  return (
    <main>
      <section className="section">
        {/** Section category */}
        <p className="section-label">
          Developer Portfolio
        </p>

        {/** Main heading */}
        <h1 className="section-title">
          Vương Đức Hiếu
        </h1>

        {/** Short introduction */}
        <p className="section-description">
          Backend Engineering focused on building practical, scalable and maintainable software products.
        </p>

        {/** Temporary CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">
            View My Projects
          </a>

          <a href="#contact" className="button-secondary">
            Let's Talk
          </a>
        </div>
      </section>
    </main>
  )
}

export default App