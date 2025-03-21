'use client';

import { usePathname } from 'next/navigation';

export default function Header () {
  const pathname = usePathname();

  return (
    <div
      className={'flex flex-col gap-4 items-center justify-center p-8 ' +
        'absolute top-0 left-0 right-0'}
    >
      <span className="text-2xl">Kollection</span>
      <div className="flex justify-center items-start gap-12">
        <a
          href="/vinyl"
          className={pathname.includes('vinyl') ? 'active-link' : ''}
        >
          Vinyl
        </a>
        <a
          href="/cd"
          className={pathname.includes('cd') ? 'active-link' : ''}
        >
          CD
        </a>
      </div>
    </div>
  );
}
