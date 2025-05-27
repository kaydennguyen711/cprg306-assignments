'use client';
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Kayden Nguyen</p>
      <p>
        GitHub:{' '}
        <Link href="https://github.com/kaydennguyen711" target="_blank">
          github.com/kaydennguyen711
        </Link>
      </p>
    </div>
  );
}
