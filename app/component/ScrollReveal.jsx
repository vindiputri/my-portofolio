"use client";
import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef = null,
  baseColor = '#71717a',
  revealColor = '#F4F4F5',
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  baseRotation = 3,
  as: Tag = 'h2',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index} aria-hidden="true">
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const anim1 = gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: { trigger: el, scroller, start: 'top bottom', end: rotationEnd, scrub: true }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    // ✅ Cuma animasi warna, per-kata, dari abu-abu ke putih — tanpa opacity, tanpa blur
    const anim2 = gsap.fromTo(
      wordElements,
      { color: baseColor },
      {
        ease: 'none',
        color: revealColor,
        stagger: 0.05,
        scrollTrigger: { trigger: el, scroller, start: 'top bottom-=20%', end: wordAnimationEnd, scrub: true }
      }
    );

    return () => {
      if (anim1.scrollTrigger) anim1.scrollTrigger.kill();
      if (anim2.scrollTrigger) anim2.scrollTrigger.kill();
      anim1.kill();
      anim2.kill();
    };
  }, [scrollContainerRef, baseRotation, baseColor, revealColor, rotationEnd, wordAnimationEnd]);

  return (
    <Tag ref={containerRef} className={`my-5 ${containerClassName}`}>
      <span className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold block ${textClassName}`}>
        {splitText}
      </span>
      <span className="sr-only">{children}</span>
    </Tag>
  );
};

export default ScrollReveal;