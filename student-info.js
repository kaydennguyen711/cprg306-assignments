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

import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
