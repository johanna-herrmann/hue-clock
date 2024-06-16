import Link from 'next/link';

export default function Tab ({ title, slug, current }) {
  return (
    <Link href={slug} className={current === slug ? 'current' : ''}>
      <span>{title}</span>
    </Link>
  );
}