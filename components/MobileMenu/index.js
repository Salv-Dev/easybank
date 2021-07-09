import React, {useEffect, useRef} from 'react';
import ZoomIn from './zoomIn';

import { Menu, Item } from './styles';

function MobileMenuComponent({ open, buttonRef }) {
    const menuRef = useRef(null);

    const clickOutside = (e) => {
        if (!menuRef.current.contains(e.target) && buttonRef.current != e.target) {
            open(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, []);

  return (
    <ZoomIn duration="0.2s">
        <Menu onClick={clickOutside} ref={menuRef}>
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