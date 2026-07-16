import React, { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      prevent: (node) =>
        node.tagName === 'A' ||
        node.closest('.modal-scroll, [data-lenis-prevent]') !== null,
    });

    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Ensure ScrollTrigger positions are calculated correctly after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenisRef.current?.destroy();
      gsap.ticker.remove(lenisRef.current?.raf as any);
    };
  }, []);

  return <>{children}</>;
}
