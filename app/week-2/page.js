import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">
          Go to Week 2 Page
        </Link>
      </p>
      <p>Additional information about the assignments can be added here.</p>
    </main>
  );
}

