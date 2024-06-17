export default function Tab ({ title, slug, current, updateView }) {
  return (
    <button className={current === slug ? 'current' : ''} onClick={() => updateView(slug)}>
      <span>{title}</span>
    </button>
  );
}