'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFoundClient() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return <p>Redirecting you to the notes page in 5 seconds...</p>;
}