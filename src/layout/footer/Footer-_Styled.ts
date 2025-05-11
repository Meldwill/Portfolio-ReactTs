import styled from "styled-components";
import {theme} from "../../styles/Theme/Theme.ts";
import wave from "../../Assets/images/wave.webp";

const Footer = styled.footer`
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding-top: 130px;
    padding-bottom: 74px;
    
    position: relative;
    @media ${theme.media.mobile} {
        padding-bottom: 36px;
    }
`
const Name = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.secondaryBg};
    
 
`

const Copyright = styled.small`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: ${theme.colors.secondaryBg};
`

export const S = {
    Footer,
    Name,
    Copyright,
}