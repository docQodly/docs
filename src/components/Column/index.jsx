import React from 'react';
import clsx from 'clsx';

export function List({ children, align = 'start' }) {
  return <div className={clsx("flex flex-col lg:flex-row flex-wrap justify-between", {
    "items-start": align === 'start',
    "items-center": align === 'center',
    "items-end": align === 'end',
  })}>{children}</div>;
}

export function Item({ children, width }) {
  return <div className={clsx({"flex-1": !width})} style={{ width }}>{children}</div>;
}

export default {
  List,
  Item,
};
