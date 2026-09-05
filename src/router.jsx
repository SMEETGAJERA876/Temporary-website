import React, { useState, useEffect } from 'react';

/**
 * Minimal history router. Seven flat routes, no params, no nesting — a
 * routing library would be more code than this whole file.
 * Direct hits on /about etc. need an SPA fallback: Vite handles it in dev,
 * vercel.json handles it in production.
 */
export function navigate(to) {
  if (to === window.location.pathname) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return path;
}

export function Link({ to, children, ...rest }) {
  const onClick = (e) => {
    // let the browser handle new-tab / middle-click / modified clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
