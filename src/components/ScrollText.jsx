import React, { useEffect, useRef } from 'react';

/**
 * Port of the reference site's only scroll animation:
 *
 *   gsap.to(element.querySelectorAll(".split-char"), {
 *     duration: 0.2, color, ease: "power2.out", stagger: 0.025,
 *     scrollTrigger: { trigger: element, start: "top bottom", end: "bottom center", scrub: 1 }
 *   })
 *
 * Characters interpolate from a muted colour to the final one, staggered in
 * reading order, scrubbed by scroll position with ~1s of catch-up lag.
 *
 * duration / stagger = 8, so eight characters are mid-transition at any moment;
 * the whole stagger span is (n - 1) + 8 stagger units wide.
 */
const SOFT = 8;
const CATCH_UP = 0.075; // per-frame lerp ~= GSAP's scrub: 1

/** 0 when the top edge sits at the viewport bottom, 1 when the bottom edge reaches centre. */
export function progressFor(top, height, viewport) {
  return Math.min(1, Math.max(0, (viewport - top) / (viewport / 2 + height)));
}

export default function ScrollText({
  as: Tag = 'h2',
  children,
  className = '',
  from = '#C6CBDC',
  to = 'currentColor'
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', 1);
      return;
    }

    let shown = 0;
    let frame = 0;

    const target = () => {
      const r = el.getBoundingClientRect();
      return progressFor(r.top, r.height, window.innerHeight);
    };
    const tick = () => {
      const t = target();
      shown += (t - shown) * CATCH_UP;
      if (Math.abs(t - shown) < 0.001) shown = t;
      el.style.setProperty('--p', shown);
      frame = Math.abs(t - shown) < 0.001 ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    shown = target();
    el.style.setProperty('--p', shown);
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', wake);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', wake);
      window.removeEventListener('resize', wake);
    };
  }, []);

  const text = String(children);
  const chars = [...text];

  return (
    <Tag
      ref={ref}
      aria-label={text}
      className={`scroll-text ${className}`}
      style={{ '--n': chars.length, '--st-from': from, '--st-to': to }}
    >
      {chars.map((c, i) => (
        <span key={i} aria-hidden="true" className="st-char" style={{ '--i': i }}>
          {c}
        </span>
      ))}
    </Tag>
  );
}

export { SOFT };
