import React from 'react';

import { Button } from './styles';

function ButtonComponent({ isVisible = true, children }) {
  return (
      <Button isVisible={isVisible}>{ children }</Button>
  );
}

export default ButtonComponent;