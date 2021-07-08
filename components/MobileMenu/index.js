import React from 'react';
import ZoomIn from './zoomIn';

import { Menu, Item } from './styles';

function MobileMenuComponent() {
  return (
    <ZoomIn duration="0.4s">
        <Menu>
            <Item><a href="#">Home</a></Item>
            <Item><a href="#">About</a></Item>
            <Item><a href="#">Contact</a></Item>
            <Item><a href="#">Blog</a></Item>
            <Item><a href="#">Carreers</a></Item>
        </Menu>
    </ZoomIn>
    );
}

export default MobileMenuComponent;