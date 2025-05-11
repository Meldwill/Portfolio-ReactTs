import { theme } from "../../../styles/Theme/Theme"
import styled, {css} from "styled-components";
import {font} from "../../../styles/Common.ts";
import {Link} from "react-scroll";


//Menu


const MenuItem = styled.li`
    position: relative;
`

const Mask = styled.span`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    
    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
    
    @media ${theme.media.tablet} {
        color: ${theme.colors.primaryBg};
    }
`

const NavLink = styled(Link)`
    ${font({weight: 400, Fmax: 26, Fmin: 12})};
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.primaryBg};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
        transition: .2s ease-in-out;
    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(10deg) translateX(2px);
            color: ${theme.colors.button};

            & + ${Mask} {
                transform: skewX(10deg) translateX(-2px);
            }
        }

    }
`



//Mobile Menu

const MobileMenu = styled.nav`
  
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.8s;
    
    ul {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        transition: 1s ease-in-out;
    }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);
        & ul {
            gap: 40px;
        }
    `}

`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 9999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryBg};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryBg};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.primaryBg};
            position: absolute;
            transform: translateY(10px);
            
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

//Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

//Works Menu

const WorksMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        margin-left: 10px;
    }
    @media ${theme.media.largeTablet} {
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 0;
            margin-left: 0;
        }
    }   
    
    @media ${theme.media.tablet} {
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media ${theme.media.mobile} {
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    } 
    
    @media ${theme.media.smallMobile} {
        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

const ListItem = styled.li`
    background: #f8faff;
    margin-bottom: 60px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 30px;
    }   
    
    @media ${theme.media.mobile} {
        margin-bottom: 18px;
    }
`

const LinkItem = styled.a<{active?: boolean}>`
    ${font({family:"'Roboto', sans-serif", weight: 400, color: `${theme.colors.font}`, lineHeight: 1.15, Fmax: 20, Fmin: 12 })};
    
    border: 3px solid #a6bcfa;
    border-radius: 67px;
    padding: 8px 50px 8px 50px;
    display: inline-block;  
    z-index: 12;
    transition: .2s;
    &:hover {
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.secondaryBg};
    }
    
    @media ${theme.media.tablet} {
        width: 160px;
        height: 42px;
        
        padding: 10px 44px;
    }
    
    @media ${theme.media.mobile} {
        width: 96px;
        height: 24px;
        padding: 2px 24px;
    }

    ${props => props.active && css<{active?: boolean}>`
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.secondaryBg};
    `}
`


export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
    WorksMenu,
    ListItem,
    LinkItem,

}