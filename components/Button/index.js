import React from 'react';

import { Button } from './styles';

function ButtonComponent({ visible }) {
  return (
      <Button visible={visible}>Request Invite</Button>
  );
}

export default ButtonComponent;