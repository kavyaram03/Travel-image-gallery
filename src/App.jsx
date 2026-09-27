import Gallery from "./components/Gallery"

function App() {
  return (
    <>

      <header className="hero">

        <nav className="top-nav">
          <div className="logo">WANDER.</div>

          <div className="nav-text">
            <span>EXPLORE</span>
            <span>JOURNAL</span>
            <span>MEMORIES</span>
          </div>
        </nav>

        <div className="hero-content">

          <p className="eyebrow">
            A COLLECTION OF BEAUTIFUL PLACES
          </p>

          <h1>
            Wander
            <br />
            <i>Beautifully.</i>
          </h1>

          <p className="hero-description">
            Slow down. Look around.
            <br />
            Find beauty in every journey.
          </p>

          <div className="scroll">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>

        </div>

      </header>

      <main>

        <section className="intro">

          <p className="section-label">01 — THE COLLECTION</p>

          <div className="intro-content">

            <h2>
              Places that
              <br />
              <i>stay with you.</i>
            </h2>

            <p>
              From quiet mountain mornings to sun-kissed shores,
              discover moments that deserve to be remembered.
            </p>

          </div>

        </section>

        <Gallery></Gallery>

      </main>

      <footer>

        <p className="footer-small">UNTIL THE NEXT JOURNEY</p>

        <h2>
          Keep
          <br />
          <i>wandering.</i>
        </h2>

        <p className="copyright">© 2026 WANDER</p>

      </footer>

    </>
  )
}

export default App