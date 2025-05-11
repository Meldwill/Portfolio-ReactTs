import styled from "styled-components";
import {theme} from "../styles/Theme/Theme.ts";
import {font} from "../styles/Common.ts";


export const SectionTitle = styled.h2`

    ${font({family: "'Roboto', sans-serif", color: `${theme.colors.accent}`, weight: 600,lineHeight: 1.36 ,Fmax: 32, Fmin: 16 })};
    text-align: center;
 
    padding-bottom: 60px;
    
    position: relative;
    &::after{
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient( 180deg, #A6BCFA 0%, #2157F2 100% );
        
        position: absolute;
        right: 50%;
        bottom: 30%;
        transform: translate(50%, -30%);
    }
   
`

export const SectionSubTitle = styled.h3`
    ${font({family: "'Roboto', sans-serif",weight: 500, color: `${theme.colors.accent}`,lineHeight: 1.25 ,Fmax: 32, Fmin: 14 })};
    text-align: center;
    //padding-bottom: 30px;
    text-align: left;
    white-space: nowrap;
`