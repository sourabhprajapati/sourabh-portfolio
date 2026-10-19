const ROLES = [
  { key: 'lead', label: 'Lead' },
  { key: 'core', label: 'Core' },
  { key: 'contributor', label: 'Contributor' },
];

// An OMR answer row: the filled bubble is my real role on the project.
export default function RoleBubbles({ role }) {
  const current = ROLES.find((r) => r.key === role);
  return (
    <span className="omr" aria-label={`My role: ${current ? current.label : role}`}>
      {ROLES.map((r) => (
        <span key={r.key} className={r.key === role ? 'on' : undefined} aria-hidden="true">
          <i />
          {r.label}
        </span>
      ))}
    </span>
  );
}
