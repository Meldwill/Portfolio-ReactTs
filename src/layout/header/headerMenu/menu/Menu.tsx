import React from 'react';
import {S} from './../HeaderMenu_Styles.ts'

const items = [
    {
        title: "Home",
        href: "home"
    },

    {
        title: "Works",
        href: "works"
    },

    {
        title: "Services",
        href: "services"
    },

    {
        title: "About",
        href: "about"
    },

    {
        title: "Testimony",
        href: "testimony"
    },

    {
        title: "Contact",
        href: "contact"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-90}
                    >
                        {item.title}
                        <S.Mask>
                                    <span>
                                        {item.title}
                                    </span>
                        </S.Mask>
                        <S.Mask>
                                    <span>
                                        {item.title}
                                    </span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};



