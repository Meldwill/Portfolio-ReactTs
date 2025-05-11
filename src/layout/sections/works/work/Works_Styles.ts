import styled from "styled-components";
import {theme} from "../../../../styles/Theme/Theme.ts";
import Dots from "../../../../Assets/images/Dots.webp";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Button} from "../../../../components/Button.ts";
import {font} from "../../../../styles/Common.ts";

const Works = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding-top: 60px;
    padding-bottom: 152px;
    position: relative;
    z-index: 1;

    ${FlexWrapper} {
        gap: 20px;
    }
    
    &::before {
        content: "";
        width: 420px;
        height: 505px;
        background-image: url(${Dots});
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        left: 20%;
        transform: translateX(-20%);
        transform-origin: left;
        z-index: -1;
    }

    &:after {

    }

    @media ${theme.media.largeTablet} {
        &::before {
            display: none;
        }
    }

    @media ${theme.media.middleTablet} {
        ${FlexWrapper} {
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
        }
        &::before {
            display: none;
        }
    }


    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            display: flex;
            justify-content: space-evenly;
        }

        &::before {
            display: none;
        }
    }

    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            display: flex;
            justify-content: space-evenly;
        }

        &::before {
            display: none;
        }
    }
`

const Work = styled.div`
    background-color: #F9F9FC;
    max-width: 270px;
    width: 100%;
    height: 100%;
    
    
   
    flex-grow: 1;
    &:nth-child(-n+4){
        margin-bottom: 0;
    }
    li:nth-child(n2 + 3) {
        margin-right: 20px;
    }
    transition: .2s;
    
    border-radius: 20px;
    &:hover {
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.15);
    }

    ${FlexWrapper} {
        display: flex;
        justify-content: space-between;
    }
    
    @media ${theme.media.mobile} {
        max-width: 164px;
        width: 100%;
        height: 100%;
    }
    
    
`

const ImgWrapper = styled.div`
    position: relative;

    &:hover {
        transition: ${theme.animations.transition};

        &:before {
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(2px);
            border-radius: 20px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            height: 97%;
           
        }

        ${Button} {
            opacity: 1;
            background: rgba(255, 143, 255, 0.3);
            transform: translateX(-50%);
            
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        bottom: 50%;
        padding: 8px 20px;
        transform: translate(-50%, -50%);

        font-weight: 700;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        line-height: 1.48;

        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.secondaryBg};
        border-radius: 20px;
    }

`

const Title = styled.h3`
    ${font({family: "'Kalameh', sans-serif", weight: 700,color: `${theme.colors.button}`,lineHeight: 1.2 ,Fmax: 20, Fmin: 12 })};
    padding: 32px 16px 26px;
    
    @media ${theme.media.tablet} {
        padding: 18px 32px 24px;
    }
    
    @media ${theme.media.mobile} {
        padding: 10px 14px 14px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 270px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media ${theme.media.tablet}{
        width: 100%;
        height: 256px;
        object-fit: cover;
    }
    
    @media ${theme.media.mobile}{
        width: 100%;
        height: 124px;
        object-fit: cover;
    }
`
const BtnWork = styled(Button)`
    ${font({family: "'Roboto', sans-serif", weight: 700,color: `${theme.colors.cardBg}`,lineHeight: 1.3 ,Fmax: 14, Fmin: 8 })};
    width: 110px;
    height: 30px;
    padding-top: 6px;
    margin: 0 20px 22px 14px;
    
    text-align: center;
    ${FlexWrapper} {
        display: flex;
        justify-content: space-between;
    }

    @media ${theme.media.laptop} {
        width: 110px;
        height: 30px;
        text-align: center;
        margin: 0 20px 22px 32px;
        padding-top: 6px;
    
    }    
    
    @media ${theme.media.largeTablet} {
        width: 110px;
        height: 30px;
        text-align: center;
        margin: 0 20px 22px 32px;
        padding-top: 8px;
   
    }    
    
    @media ${theme.media.tablet} {
        width: 110px;
        height: 30px;
        text-align: center;
        margin: 0 20px 22px 32px;
        padding-top: 8px;
     
    }
    
    @media ${theme.media.mobile} {
        width: 66px;
        height: 18px;
        text-align: center;
        margin: 2px 12px;
        padding-top: 4px;
    }
`

const Link = styled.a`
    ${font({family: "'Roboto', sans-serif", weight: 400,color: `${theme.colors.button}`,lineHeight: 1.48 ,Fmax: 14, Fmin: 8 })};

    text-align: right;
    margin: 4px 22px 28px 0;
    
    @media ${theme.media.tablet} {
        margin: 6px 32px 28px 0;
    }
    
    @media ${theme.media.mobile} {
        margin: 4px 6px 18px 0;
    }
`

export const S = {
    Works,
    Work,
    ImgWrapper,
    Title,
    Image,
    BtnWork,
    Link,
    Button,
}