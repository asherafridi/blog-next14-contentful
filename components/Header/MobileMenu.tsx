import React from 'react';
import ListItem from "@mui/material/ListItem"; // Correct import
import Link from 'next/link';

const menus = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: 'Services', link: '/services' },
    { id: 3, title: 'Portfolio', link: '/portfolio' },
    { id: 4, title: 'ChatZone', link: '/gpt' },
    { id: 5, title: 'Meet Now', link: '/meet' },
];

const MobileMenu = () => {

    return (
        <ul className="main_menu_list clearfix">
            {menus.map((item) => (
                <ListItem  key={item.id}>
                    
                        <Link href={item.link} onClick={() => window.scrollTo(0, 0)} className="active">
                            {item.title}
                        </Link>
                </ListItem>
            ))}
        </ul>
    );
};

export default MobileMenu;
