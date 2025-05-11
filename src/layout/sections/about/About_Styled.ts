import styled from "styled-components";
import {theme} from "../../../styles/Theme/Theme.ts";
import {font} from "../../../styles/Common.ts";
import {Blur} from "../../../components/Blur.ts";
import mapoflive from "../../../Assets/images/Map-near-man.webp";
import spineless from "../../../Assets/images/spineofman.webp";

const About = styled.section`
    display: flex;
    background-color: #A5BBF8;
    margin-bottom: 60px;
    position: relative;
    z-index: 2;

    &::after {
        content: "";
        background-image: url("${mapoflive}");
        background-repeat: no-repeat;
        background-size: cover;
        width: 882px;
        height: 814px;
        right: 40%;
        display: inline-block;
        position: absolute;
        z-index: -1;

        @media ${theme.media.smallLaptop} {
            width: 746px;
            height: 712px;
            top: -10%;
            transform: translate(20%, 30%);
        }   
        
        @media ${theme.media.largeTablet} {
            width: 446px;
            height: 412px;
            top: 40%;
            transform: translate(0%, 30%);
        }     
        
        @media ${theme.media.middleTablet} {
            width: 446px;
            height: 412px;
            top: 40%;
            transform: translate(0%, 30%);
        }   
        
        @media ${theme.media.tablet} {
            width: 446px;
            height: 412px;
            top: 34%;
            transform: translate(0%, 30%);
        }

        @media ${theme.media.mobile} {
            width: 234px;
            height: 216px;
            top: 50%;
            transform: translate(0%, 30%);
        }

    }

    &::before {
        content: "";
        background-image: url("${spineless}");
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: right;

        display: inline-block;
        position: absolute;

        width: 1632px;
        height: 900px;
        right: 0;
        bottom: 0;

        filter: grayscale(100%) brightness(1.7);


        @media ${theme.media.smallLaptop} {
            width: 986px;
            height: 570px;
         
            right: 0;
            transform: translate(0px, 16px);
            bottom: 0;
        }    
        
        @media ${theme.media.largeTablet} {
            width: 986px;
            height: 570px;
         
            right: 0;
            transform: translate(0px, 16px);
            bottom: 0;
        }  
        
        @media ${theme.media.middleTablet} {
            width: 986px;
            height: 570px;
         
            right: 0;
            transform: translate(0px, 16px);
            bottom: 0;
        }
        
        @media ${theme.media.tablet} {
            width: 986px;
            height: 570px;
            right: 2%;
            transform: translate(-2px, 16px);
        }

        @media ${theme.media.mobile} {
            width: 516px;
            height: 300px;
            right: 2%;
            transform: translate(10px, 10px);
        }  
        
        @media ${theme.media.mobile} {
            width: 400px;
            height: 250px;
            right: 6%;
            transform: translate(10px, 10%);
        }
    }
}
`



const WrapperBlur = styled(Blur)`
    width: 100%;
    margin-top: 30%;
    max-width: 535px;
    align-self: end;
    z-index: 1;
    margin-bottom: 38px;
    
    @media ${theme.media.largeTablet} {
        margin-inline: auto;
        border-radius: 100px 0;
        margin-top: 70px;
        margin-bottom: 50%;
    }   
    
    @media ${theme.media.middleTablet} {
        margin-inline: auto;
        border-radius: 100px 0;
        margin-top: 70px;
        margin-bottom: 68%;
    }    
    
    @media ${theme.media.tablet} {
        margin-inline: auto;
        border-radius: 100px 0;
        margin-top: 70px;
        margin-bottom: 85%;
    }    
    
    @media ${theme.media.mobile} {
        margin-inline: auto;
        border-radius: 54px 0;
        margin-top: 48px;
        margin-bottom: 66%;
    }  
    
    @media ${theme.media.smallMobile} {
        margin-bottom: 72%;
    }
`



const PersonInfo = styled.div`
    padding: 74px 40px 0 60px;

    @media ${theme.media.mobile} {
        padding: 40px 22px 0 32px;
    }
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 30px;
    top: 30px;

    svg {
        color: ${theme.colors.secondaryBg};
        margin-right: 16px;
    }

    @media ${theme.media.largeTablet} {
  
    }  
    
    @media ${theme.media.middleTablet} {

    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
    
    @media ${theme.media.mobile} {
     
    }
    
`

const NameInfo = styled.h2`
    ${font({family: "'Roboto', sans-serif", weight: 700, color: `${theme.colors.font}`,lineHeight: 1.36 ,Fmax: 60, Fmin: 32 })};


    span {
        &:hover {
            color: #2157f2;
        }
    }
    
    @media ${theme.media.mobile}{
        hyphens: auto;
    }

`

const DescribePerson = styled.ul`
    ${font({family: "'Roboto', sans-serif", weight: 400, color: `${theme.colors.font}`,lineHeight: 1.36 ,Fmax: 20, Fmin: 10 })};
    padding: 22px 0 60px 0;
    
    @media ${theme.media.mobile} {
        padding: 12px 0 36px 14px;
    }
`

const DescribePersonItem = styled.li`
    padding-bottom: 6px;
    position: relative;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%);

        position: absolute;
        right: 100%;
        bottom: 15%;
        transform: translate(-50%, -30%);
        
        @media ${theme.media.mobile} {
            width: 10px;
            height: 10px;
            bottom: 30%;
        }
    }
`

export const S = {
    About,
    Blur,
    WrapperBlur,
    PersonInfo,
    IconWrapper,
    NameInfo,
    DescribePerson,
    DescribePersonItem,
}