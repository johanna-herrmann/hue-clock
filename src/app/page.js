import { redirect } from 'next/navigation'

export default function Home() {
  // simply redirect to clock
  redirect('/clock');
}
