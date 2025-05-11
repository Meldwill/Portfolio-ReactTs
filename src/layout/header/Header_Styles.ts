import styled from "styled-components";
import {theme} from "../../styles/Theme/Theme.ts";

const Header = styled.header`
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    
    svg {
        color: ${theme.colors.font};
    }
`

export const S = {
    Header,
}