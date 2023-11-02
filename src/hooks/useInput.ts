'use client';
import React, {useState} from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setValue(value);
  };

  return {value, onChangeValueHandler, setValue};
};
