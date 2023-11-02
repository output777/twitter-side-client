'use client';
import React from 'react';

interface Props {
  value?: string;
  className?: string;
  style?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: Props) {
  const {value, className, style, onChange} = props;
  return (
    <input type="text" value={value} className={className} onChange={onChange} style={style} />
  );
}

export default Input;
