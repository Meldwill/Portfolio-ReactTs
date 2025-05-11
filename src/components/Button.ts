import styled from "styled-components";
import {theme} from "../styles/Theme/Theme.ts";


export const Button = styled.button`
    background-color: ${theme.colors.button};
    color: ${theme.colors.secondaryBg};
    border-radius: 20px;
    transition: .2s;
    &:hover {
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
    }
`