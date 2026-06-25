const courses = [
  {
    title: "Mathematical Thinking",
    description: "Build intuition with visual proofs, patterns, and playful logic.",
    icon: "∑",
    meta: "18 lessons",
  },
  {
    title: "Scientific Reasoning",
    description: "Test ideas through tiny experiments and interactive models.",
    icon: "∆",
    meta: "12 labs",
  },
  {
    title: "Computer Science",
    description: "Learn algorithms by solving puzzles, sorting paths, and debugging.",
    icon: "{}",
    meta: "16 puzzles",
  },
  {
    title: "Data Fluency",
    description: "Read charts, question claims, and make sense of uncertainty.",
    icon: "%",
    meta: "10 modules",
  },
];

const proofStats = [
  {
    value: "8 min",
    label: "Daily lessons designed for focused practice without overload.",
  },
  {
    value: "42",
    label: "Interactive checkpoints that turn passive reading into recall.",
  },
  {
    value: "3x",
    label: "More visible progress with streaks, paths, and quick wins.",
  },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Wisdom Blue home">
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span>Wisdom Blue</span>
        </a>
        <div className="nav-links" aria-label="Learning sections">
          <a href="#paths">Paths</a>
          <a href="#courses">Courses</a>
          <a href="#challenge">Daily Challenge</a>
        </div>
        <div className="nav-actions">
          <a className="button ghost" href="#courses">
            Sign in
          </a>
          <a className="button primary" href="#paths">
            Start learning
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="hero-card" aria-label="Interactive lesson preview">
      <div className="lesson-shell">
        <div className="lesson-topbar">
          <div className="dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="lesson-progress" aria-label="Lesson progress">
            <span />
          </div>
        </div>
        <div className="lesson-body">
          <h2>What makes a pattern predictable?</h2>
          <div className="formula-card">
            <span>Explore the next step</span>
            <div className="formula-grid" aria-hidden="true">
              <div className="formula-tile">
                <strong>2</strong>
                <span>start</span>
              </div>
              <div className="formula-tile">
                <strong>6</strong>
                <span>grow</span>
              </div>
              <div className="formula-tile">
                <strong>18</strong>
                <span>next?</span>
              </div>
            </div>
          </div>
          <div className="answer-options">
            <div className="answer-option">
              <span>Add four each time</span>
              <span>A</span>
            </div>
            <div className="answer-option active">
              <span>Multiply by three</span>
              <span>B</span>
            </div>
            <div className="answer-option">
              <span>Alternate the rule</span>
              <span>C</span>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <strong>Hint unlocked</strong>
        <span>Look at the relationship between each pair, not the gap.</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main id="top" className="hero">
      <div className="container hero-grid">
        <section aria-labelledby="hero-title">
          <p className="eyebrow">Interactive learning in Wisdom Blue</p>
          <h1 id="hero-title">Learn by solving, not memorizing.</h1>
          <p>
            A polished learning homepage with crisp cards, shaded modules, and
            hands-on lessons designed to make math, science, and logic feel
            tangible.
          </p>
          <div className="hero-actions">
            <a className="button primary large" href="#paths">
              Begin a path
            </a>
            <a className="button secondary large" href="#challenge">
              Try today&apos;s puzzle
            </a>
          </div>
          <div className="micro-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar">A</span>
              <span className="avatar">M</span>
              <span className="avatar">R</span>
            </div>
            <span>Built for curious learners who like to see ideas click.</span>
          </div>
        </section>
        <HeroPreview />
      </div>
    </main>
  );
}

function LearningPathPreview() {
  return (
    <section id="paths" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>A guided path with visible momentum.</h2>
          <p>
            Each step mixes a short concept, a visual prompt, and a quick check
            so progress feels concrete from the first minute.
          </p>
        </div>
        <div className="path-panel">
          <div className="path-map" aria-label="Learning path preview">
            <div className="path-line" />
            <div className="path-node">1</div>
            <div className="path-node">2</div>
            <div className="path-node">3</div>
          </div>
          <div className="path-copy">
            <p className="eyebrow">Personalized practice</p>
            <h2>Move through concepts one decision at a time.</h2>
            <ul className="check-list">
              <li>
                <span className="check-icon">✓</span>
                <span>Visual prompts make abstract ideas easier to inspect.</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Small checkpoints keep the learner actively choosing.</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Progress cards surface streaks, mastery, and next steps.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCards() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Choose a course that feels like a puzzle box.</h2>
          <p>
            Bright, tactile modules use the blue system for hierarchy, feedback,
            and polished depth across the full grid.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-icon" aria-hidden="true">
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>{course.meta}</span>
                <span>Explore →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DailyChallenge() {
  return (
    <section id="challenge" className="section challenge">
      <div className="container challenge-grid">
        <div>
          <p className="eyebrow">Daily challenge</p>
          <h2>One thoughtful puzzle, every day.</h2>
          <p>
            Short challenges keep the homepage lively and invite learners to
            engage immediately, with glassy blue panels and clear answer states.
          </p>
          <a className="button secondary large" href="#courses">
            Warm up with a course
          </a>
        </div>
        <div className="challenge-card">
          <h3>Complete the blue square</h3>
          <div className="puzzle-grid" aria-label="Number puzzle">
            <div className="puzzle-cell">4</div>
            <div className="puzzle-cell">9</div>
            <div className="puzzle-cell">16</div>
            <div className="puzzle-cell">25</div>
            <div className="puzzle-cell">?</div>
            <div className="puzzle-cell">49</div>
            <div className="puzzle-cell">64</div>
            <div className="puzzle-cell">81</div>
            <div className="puzzle-cell">100</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section" aria-labelledby="proof-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="proof-title">A homepage built for clarity and momentum.</h2>
          <p>
            The layout favors large type, strong rhythm, and soft depth so each
            section feels distinct while staying part of one blue system.
          </p>
        </div>
        <div className="proof-grid">
          {proofStats.map((stat) => (
            <article className="proof-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span>Wisdom Blue</span>
        </a>
        <div className="footer-links">
          <a href="#paths">Paths</a>
          <a href="#courses">Courses</a>
          <a href="#challenge">Challenge</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LearningPathPreview />
      <CourseCards />
      <DailyChallenge />
      <ProofSection />
      <Footer />
    </div>
  );
}
