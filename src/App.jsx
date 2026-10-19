import CaseStudy from './components/CaseStudy.jsx';
import { profile, projects } from './data/projects.js';

export default function App() {
  return (
    <div className="wrap">
      <header>
        <div className="intro">
          <img className="avatar" src={profile.photo} alt={`Photo of ${profile.name}`} width="150" height="150" />
          <div className="intro-text">
            <span className="label">{profile.tagline}</span>
            <h1>{profile.name}</h1>
          </div>
        </div>
        <p className="lede">
          I build <strong>education software that schools use every day</strong>: web portals, React Native apps,
          and the cloud infrastructure and release pipelines that ship them. These case studies show four
          production systems from my current role and one AWS project of my own, what each one does, and{' '}
          <span className="hl">exactly which parts I built</span>.
        </p>
        <div className="facts">
          {profile.facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
        <nav className="toc" aria-label="Case studies">
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              <span className="mono">{p.roll}</span> {p.title}
            </a>
          ))}
        </nav>
      </header>

      <aside className="note" aria-label="About access">
        <span className="stamp">Sign-in only</span>
        <p>
          These apps hold real student and school data, so they sit behind a login and their code is private.
          Instead of screenshots of real records, each case study shows the architecture, the features and my
          role. I'm happy to walk you through any of them on a short screen-share call using demo data.
        </p>
      </aside>

      {projects.map((project) => (
        <CaseStudy key={project.id} project={project} />
      ))}

      <footer>
        <h2>See any of these working</h2>
        <p>
          Because the apps hold real school data, I demo them on a short screen-share with demo accounts. Ask on
          Upwork and I'll schedule a walkthrough of whichever project matters for your work.
        </p>
        <div className="links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
