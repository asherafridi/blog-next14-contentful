import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },
    {
        id: 2,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 31,
                title: 'Case Studies',
                link: '/portfolio'
            },
            {
                id: 3222,
                title: 'Our Pricing',
                link: '/pricing'
            },
            {
                id: 322,
                title: 'About Us',
                link: '/about'
            },
            {
                id: 345,
                title: 'Team',
                link: '/team'
            },
        ]
    },
    {
        id: 3,
        title: 'Portfolio',
        link: '/portfolio',
    },
    {
        id: 4,
        title: 'ChatZone',
        link: '/gpt',
    },
    {
        id: 5,
        title: 'Meet Now',
        link: '/meet',
    },


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="main_menu_list clearfix">
            {menus.map((item, mn) => {
                return (
                <ListItem className={item.id === openId ? 'active' : undefined} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="subMenu">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            href={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                href={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;