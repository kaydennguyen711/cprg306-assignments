import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name</p>
      <p>
        <Link href="https://github.com/kaydennguyen711/cprg306-assignments" target="_blank">
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}