import React, { useState } from 'react';

export const useTextInput = (
  initialState: string,
  callback: (value: string) => void
) => {
  const [state, setState] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState(value);
    callback(value);
  };

  return {
    state,
    onChange,
  };
};
