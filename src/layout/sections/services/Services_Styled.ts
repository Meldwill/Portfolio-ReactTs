import styled from "styled-components";
import { theme } from "../../../styles/Theme/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {font} from "../../../styles/Common.ts";

const Services = styled.section`
    margin-bottom: 96px;
    position: relative;
    @media ${theme.media.smallLaptop} {
        ${FlexWrapper} {
            flex-wrap: wrap;
            gap: 20px;
        }
    }

    @media ${theme.media.tablet} {
        svg {
            width: 56px;
            height: 56px;
        }
    }  
    
    @media ${theme.media.mobile} {
        svg {
            width: 30px;
            height: 30px;
        }
    }

`
const ViewCard = styled.div`
    box-shadow: 0 15px 29px 0 rgba(0, 0, 0, 0.05);
    background: ${theme.colors.secondaryBg};
    
    padding: 120px 130px 0 44px;
    max-width: 334px;
    height: 402px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: self-start;
    gap: 30px;
    &:nth-child(-n+2){
        margin-right: 20px;
    }
    &:first-child {
        padding-bottom: 30px;
    }
    svg {
        vertical-align: sub;
    }
    
    @media ${theme.media.smallLaptop} {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        &:nth-child(-n+3){
            margin-right: 0;
        }
        &:first-child {
            padding-bottom: 38px;
        }
    }
    
    @media ${theme.media.largeTablet} {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        gap: 20px;
        padding-bottom: 38px;
    }
    
    @media ${theme.media.tablet} {
        max-width: 280px;
        height: 100%;
        padding: 98px 110px 38px 50px;
    } 
    
    @media ${theme.media.mobile} {
        max-width: 156px;
        height: 100%;
        padding: 54px 50px 20px 28px;
        svg {
            vertical-align: middle;
        }
        &:first-child {
            padding-bottom: 20px;
        }
      
    }
    
`


const View = styled.span`
    margin-top: 8px;
    @media ${theme.media.tablet} {
        svg {
            width: 21px;
            height: 21px;
        }
    }  
    
    @media ${theme.media.mobile} {
        svg {
            width: 10px;
            height: 10px;
        }
    }
    
`

const ViewLink = styled.a`
    ${font({family: "'Roboto', sans-serif",weight: 400, color: `${theme.colors.button}`,lineHeight: 1.96 ,Fmax: 16, Fmin: 7 })};
    padding-right: 12px;
    
    @media ${theme.media.tablet} {
        vertical-align: middle;
    }
`

export const S = {
    Services,
    ViewCard,
    View,
    ViewLink,
}