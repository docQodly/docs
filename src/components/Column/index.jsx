import React from 'react';
import clsx from 'clsx';

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
  return <div className={clsx({"flex-1": !width})} style={{ width }}>{children}</div>;
}

export default {
  List,
  Item,
};
