import RoleBubbles from './RoleBubbles.jsx';
import Diagram from './Diagram.jsx';
import Media from './Media.jsx';

function Ticks({ items, mine }) {
  return (
    <ul className={mine ? 'ticks mine' : 'ticks'}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CaseStudy({ project }) {
  const { id, roll, role, kicker, title, summary, built, product, parts, stack, links, media, diagram } = project;

  return (
    <article className="card" id={id}>
      <div className="card-head">
        <span className="roll">
          Roll No. <b>{roll}</b>
        </span>
        <RoleBubbles role={role} />
      </div>

      <div className="card-body">
        <span className="label">{kicker}</span>
        <h2>{title}</h2>
        <p className="summary">{summary}</p>

        {media.length > 0 && <Media items={media} />}

        {parts ? (
          <div className="parts">
            {parts.map((part) => (
              <section className="part" key={part.title}>
                <h3>{part.title}</h3>
                <span className="part-role">{part.role}</span>
                <Ticks items={part.built} mine />
                {part.team && <Ticks items={part.team} />}
              </section>
            ))}
          </div>
        ) : (
          <div className="cols">
            <div>
              <h3>What I built</h3>
              <Ticks items={built} mine />
            </div>
            <div>
              <h3>What the product does</h3>
              <Ticks items={product} />
            </div>
          </div>
        )}

        {project.devopsAlso && <Ticks items={project.devopsAlso} mine />}

        <div className="chips" aria-label="Technology">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="links">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <Diagram lanes={diagram} />
      </div>
    </article>
  );
}
