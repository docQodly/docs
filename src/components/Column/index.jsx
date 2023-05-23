import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export const useMediaQuery = (query) => {
  const mediaMatch = typeof window !== 'undefined' && window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.onchange = handler;
    return () => mediaMatch.onchange = null;
  });
  return matches;
};

export function List({ children, align = 'start', justifyContent = 'start' }) {
  return <div className={clsx("flex flex-col lg:flex-row flex-wrap", {
    "items-start": align === 'start',
    "items-center": align === 'center',
    "items-end": align === 'end',
  },{
    "justify-start": justifyContent === 'start',
    "justify-center": justifyContent === 'center',
    "justify-end": justifyContent === 'end',
    "justify-between": justifyContent === 'between',
    "justify-around": justifyContent === 'around',
    "justify-evenly": justifyContent === 'evenly',
  })}>{children}</div>;
}

export function Item({ children, width }) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return <div className={clsx({"flex-1": !width})} style={isMobile ? {}: { width }}>{children}</div>;
}

export default {
  List,
  Item,
};
