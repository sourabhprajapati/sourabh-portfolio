// Draws each lane as columns of boxes joined by arrows, left to right.
function Box({ box }) {
  return (
    <div className={box.db ? 'box db' : 'box'}>
      <strong>{box.t}</strong>
      {box.s && <span>{box.s}</span>}
    </div>
  );
}

export default function Diagram({ lanes }) {
  return (
    <div className="diagram">
      <span className="label">Architecture</span>
      <div className="diagram-scroll">
        <div className="lanes">
          {lanes.map((lane, laneIndex) => (
            <div className="lane" key={laneIndex}>
              {lane.map((column, colIndex) => (
                <div className="lane-step" key={colIndex}>
                  {colIndex > 0 && (
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                  <div className="column">
                    {column.map((box) => (
                      <Box box={box} key={box.t} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
