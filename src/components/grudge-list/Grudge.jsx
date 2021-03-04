const Grudge = ({ grudge, onRemove, onToggle }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={grudge.forgiven}
        onChange={() => onToggle(grudge.id)}
      />
      <h4 style={{ textDecoration: grudge.forgiven ? 'line-through' : 'none' }}>
        {grudge.person}
      </h4>
      <span
        style={{ textDecoration: grudge.forgiven ? 'line-through' : 'none' }}
      >
        {grudge.reason}
      </span>
      <button onClick={() => onRemove(grudge.id)}>x</button>
    </li>
  );
};

export default Grudge;
