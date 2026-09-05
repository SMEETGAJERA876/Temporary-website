import { useEffect } from 'react';

/**
 * One IntersectionObserver for the whole page. Any element carrying
 * `reveal-up`, `draw-line` or `wipe` gets `is-in` the first time it scrolls into
 * view; the transition itself lives in index.css. Stagger a group by setting
 * `--d` per item. Pass the current route as `key` so it re-arms on navigation.
 */
export default function useReveal(key) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-up, .draw-line, .wipe');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((n) => n.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [key]);
}
