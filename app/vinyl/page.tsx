'use client';

import { useState } from 'react';

import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';

export default function Vinyl () {
  const [viewMode, setViewMode] = useState<'stacked' | 'grid'>('stacked');

  return (
    <div
      className={'flex flex-col gap-8 items-center justify-center ' +
        'min-h-screen p-16'}
    >
      <Header />
      <Footer
        viewMode={viewMode}
        changeViewMode={setViewMode}
        artistName="SCH"
        albumTitle="JVLIVS III: Ad Finem"
      />
    </div>
  );
}
