'use client';

import Link from 'next/link';
import React from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  label?: string;
  className?: string;
  style?: any;
  to?: string;
  onClick?: () => void;
}

function Button(props: Props) {
  const {label, className, style, onClick, to} = props;
  return to ? (
    <Link href={to} className={className} style={style}>
      {label}
    </Link>
  ) : (
    <button className={className} style={style} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
