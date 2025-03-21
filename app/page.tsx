'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Home () {
  const [showSplash, setShowSplash] = useState(true);
  const splashRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      splashRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
      },
      '+=1'
    ).to(
      splashRef.current,
      {
        opacity: 0,
        scale: .5,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          setTimeout(() => setShowSplash(false), 500);
        },
      },
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: '100px', opacity: 0 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '+=0.75'
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: .75 },
      '+=0.5'
    );
    tl.fromTo(
      linksRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: .5 },
      '-=0.5'
    );
  }, [showSplash]);

  return (
    <div
      className={'flex flex-col gap-8 items-center justify-center ' +
        'min-h-screen p-16'}
    >
      { showSplash ? (
        <span
          ref={splashRef}
          className="text-9xl font-normal opacity-0"
        >
          K
        </span>
      ) : (
        <>
          <h1 ref={titleRef} className="text-5xl font-normal opacity-0">
            Kollection
          </h1>
          <p ref={textRef} className="text-center text-gray-400 opacity-0">
            Choose which part of the kollection you wanna see.
          </p>
          <div
            ref={linksRef}
            className="flex justify-center items-center gap-12 opacity-0"
          >
            <a href="/vinyl" className="text-gray-400">
              Vinyl
            </a>
            <a href="/cd" className="text-gray-400">
              CD
            </a>
          </div>
        </>
      ) }
    </div>
  );
}
