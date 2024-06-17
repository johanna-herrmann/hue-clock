export default function Tab ({ title, slug, current, updateView }) {
  return (
    <a href="javascript:void(0);" className={current === slug ? 'current' : ''} onClick={() => updateView(slug)}>
      <span>{title}</span>
    </a>
  );
}