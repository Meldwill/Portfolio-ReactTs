import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import {Button} from "../../../components/Button.ts";
import { theme } from "../../../styles/Theme/Theme"
import {font} from "../../../styles/Common.ts";
import styled from "styled-components";

const Main = styled.section`
    min-height: 100vh;
    padding-top: 190px;
    position: relative;

    // боковой фон

    &:before {
        content: "";
        height: 100%;
        width: 30%;
        background-color: ${theme.colors.primaryBg};
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
    }

    @media ${theme.media.mobile} {
        padding-inline: 10px;
        &:before {
            width: 50%;
        }
        ${FlexWrapper} {
            padding-top: 6px;
        }
    }

    @media ${theme.media.tablet} {
        padding-inline: 24px;

        &:before {
            width: 50%;
            height: 66%;
        }
        ${FlexWrapper} {
            padding-top: 6px;
        }
    }

    @media ${theme.media.largeTablet} {
        padding-inline: 50px;
     
        &:before {
            top: 0;
            height: 72%;
        }

        ${FlexWrapper} {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding-top: 28px;
        }
    }
`

const BtnMain = styled(Button)`
    ${font({color: `${theme.colors.secondaryBg}`, weight: 600,lineHeight: 1.5 ,Fmax: 15, Fmin: 8 })};
    width: 200px;
    height: 54px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 32px;
    
    
    @media ${theme.media.laptop} {
        svg{
            width: 24px;
            height: 24px;
        }
    }


    @media ${theme.media.largeTablet} {
        svg{
            width: 22px;
            height: 22px;
        }
    }
    
    @media ${theme.media.tablet} {
        width: 200px;
    }



    @media ${theme.media.mobile} {
        width: 112px;
        height: 30px;
        margin: 0 18px 0 0;
        
    }

`

// плюс
const CrossRotate = styled.span`
    ${font({weight: 600, lineHeight: 1.36 })};
    text-align: center;
    color: rgba(33, 87, 242, 0.5);
    position: absolute;
    transform: rotate(45deg);
    left: 32%;
    top: 66px;
    font-size: 150px;
    
    @media ${theme.media.largeTablet} {
        transform: rotate(45deg) translate(-50%, -50%);
        left: 66%;
        top: 14%;
    }

    @media ${theme.media.tablet}{
        left: 64%;
        top: 14%;
        transform: rotate(45deg) translate(-50%, -50%);
    }

    @media ${theme.media.mobile} {
        left: 66%;
        top: 10%;
        transform: rotate(45deg) translate(66%, 2%);
        font-size: 100px;
    }
`

// круг
const CrossWrapper = styled.div`
    &:after {
        content: '';
        width: 152px;
        height: 152px;
        position: absolute;
        z-index: -2;
        border: 22px solid rgba(33, 87, 242, 0.4);
        border-radius: 50%;
        right: 18%;
        bottom: 24%;
        transform: translate(-18%, -24%);
    }

    @media ${theme.media.laptop} {
        &::after {
            right: 7%;
            bottom: 24%;
            transform: translate(-10%, -30%);
        }
    }

    @media ${theme.media.largeTablet} {
        &::after {
            right: 0;
            bottom: 30%;
            transform: translate(-40%, -30%);
        }
    }

    @media ${theme.media.tablet} {
        &::after {
            right: 0;
            bottom: 32%;
            transform: translate(-46%, -42%);
        }
    }
    
    @media ${theme.media.mobile} {
        &::after {
            width: 100px;
            height: 100px;

            right: 4%;
            bottom: 30%;
            transform: translate(-50%, -50%);

            border-radius: 100%;
            border: 14px solid rgba(33, 87, 242, 0.4);

        }
    }
    
 


 
`

// фон с блюром
const WrapperBlur = styled(FlexWrapper)`
    background-image: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    background-color: #a6bcfa2b;

    backdrop-filter: blur(20px);
    border-bottom-right-radius: 200px;
    border-top-left-radius: 200px;
    border: 2px solid #ffffffbf;

    position: relative;
    width: 100%;
    margin-bottom: 46px;


    @media ${theme.media.mobile} {
        flex-wrap: wrap;
        border-radius: 112px 0;
        margin-bottom: 0;
        padding-bottom: 46px;
    }
`

const Photo = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    transform: rotate(-3deg);
    border: 25px solid #fff;
    margin-top: 42px;
    margin-left: 106px;
    
    
    @media ${theme.media.largeTablet} {
        width: 370px;
        height: 370px;
        border: 20px solid #fff;
        margin: 50px 30px 30px;
    }

    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
        border: 20px solid #fff;
        margin: 30px 20px 20px;
    }

    @media ${theme.media.mobile} {
        width: 186px;
        height: 186px;
        border: 14px solid #fff;
        margin: 16px auto 14px;
    }
`

const TextBlock = styled.div`
    padding: 76px 128px 76px 76px;
    position: relative;
    
    
    @media ${theme.media.largeTablet} {
        padding: 50px 50px 76px 30px;
    }

    @media ${theme.media.mobile} {
        padding: 14px 28px 12px 42px;
        &:nth-child(3){
            ${FlexWrapper}{
                display: flex;
                justify-content: center;
            }
        }
    }
`

const Name = styled.h1`
    ${font({family:"'Roboto', serif", weight: 700,lineHeight: 1.15, Fmax: 60, Fmin: 32 })};
    color: ${theme.colors.font};
    padding-bottom: 20px;

    span {
        &:hover {
            color: #2157f2;
        }
    }
    
    
    @media ${theme.media.mobile} {
        padding-bottom: 12px;
    }
    
    p{
        display: none;
    }
`

const Describe = styled.p`
    ${font({weight: 400,lineHeight: 1.5,Fmax: 20, Fmin: 12  })};
    padding-right: 46px;
    padding-bottom: 38px;
    color: ${theme.colors.font};
    
    @media ${theme.media.largeTablet} {
        padding: 0 50px 50px 0;
    }

    @media ${theme.media.mobile} {
        padding: 0 20px 20px 0;
    }
`

const Resumelink = styled.a`
    ${font({weight: 400,lineHeight: 1.5, Fmax: 20, Fmin: 12  })};
    color: #6C92FF;


    @media ${theme.media.mobile} {
     
    }
`

const Skills = styled.div`
    padding-top: 46px;
    padding-bottom: 90px;
    gap: 12px;
    &:nth-child(3) {
        margin-right: 136px;
    }
    
    @media ${theme.media.laptop}{
        &:nth-child(3) {
            margin-right: 70px;
        }
    }   
    @media ${theme.media.smallLaptop}{
        &:nth-child(3) {
            margin-right: 0;
        }
    }
    @media ${theme.media.largeTablet}{
        padding-top: 130px;
        padding-bottom: 60px;
        //display: flex;
        //justify-content: center;
        //align-items: center;
        ${FlexWrapper} {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 66px;
            justify-self: center;
        }
    }
    
    @media ${theme.media.mobile} {
   
    }
`

//Skill

const Skill = styled.div`
    width: 160px;
    height: 90px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
    background: #a6bcfa;
    border-radius: 24px;
    position: relative;
    text-align: center;
   
    
    &:nth-child(-n+3) {
        margin-right: 12px;
    }
    
    @media ${theme.media.largeTablet} {
        border-radius: 40px;
        width: 200px;
        height: 130px;
        &:nth-child(-n+3) {
            margin-right: 0;
        }
    }

    @media ${theme.media.mobile} {
        border-radius: 22px;
        width: 146px;
        height: 82px;
        &:nth-child(-n+3) {
            margin-right: 0;
        }
    }

`

const IconWrapper = styled.div`
    position: absolute;
    display: inline-block;
    right: 44px;
    bottom: 52px;
    
    @media ${theme.media.largeTablet} {
        right: 50px;
        bottom: 86px;

        svg {
            width: 100px;
            height: 100px;
        }
    }

    @media ${theme.media.mobile} {
        right: 50px;
        bottom: 44px;
        svg {
            width: 50px;
            height: 50px;
        }
    }
`

const SkillText = styled.h3`
    ${font({family: "'Roboto', sans-serif", color: `${theme.colors.secondaryBg}`, weight: 600,lineHeight: 1.36, Fmax: 20, Fmin: 18 })};
    color: ${theme.colors.secondaryBg};
    padding-top: 44px;
    transition: ${theme.animations.transition};
    
    &:hover {
        color: ${theme.colors.button};
    
    }
`


export const S = {
    Main,
    BtnMain,
    CrossRotate,
    CrossWrapper,
    WrapperBlur,
    Photo,
    TextBlock,
    Name,
    Describe,
    Resumelink,
    Skills,
    Skill,
    IconWrapper,
    SkillText,
}