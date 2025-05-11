import styled from "styled-components";
import {theme} from "../../../styles/Theme/Theme.ts";
import {Button} from "../../../components/Button.ts";

const Contacts = styled.section`
    position: relative;
    h3 {
        align-self: self-start;
        margin-left: 204px;
    }
    
    @media ${theme.media.tablet} {
        h3{
            align-self: center;
            margin-left: 0;
        }
    }
    
`

const Form = styled.form`
    width: 100%;
    max-width: 432px;

    textarea {
        resize: none;
        height: 152px;
    }

    @media ${theme.media.tablet} {
        margin-bottom: 36px;
    }

    @media ${theme.media.mobile} {
        max-width: 262px;
        textarea {
            resize: none;
            height: 94px;
        }
    }
`

const FormIconWrapper = styled.div`
    max-width: 932px;
    width: 100%;
    box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
    background: ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;
    margin-bottom: 66px;
    padding: 52px 0 46px 82px;

    @media ${theme.media.middleTablet} {
        justify-content: center;
        flex-wrap: wrap;
        padding: 52px 20px 0;
        gap: 20px;
        flex-grow: 1;
    }

    @media ${theme.media.tablet} {
        justify-content: center;
        flex-wrap: wrap;
        padding: 52px 0 0;
        gap: 20px;
    } 
    
    @media ${theme.media.mobile} {
        flex-grow: 1;
    }
`


const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin: 0 110px 0 84px;

    @media ${theme.media.tablet} {
        margin: 0 auto;
    }

    @media ${theme.media.mobile} {
        margin: 0 auto;
    }
        svg {
            width: 45px;
            height: 45px;
        }
`

const PlaceName = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;

    line-height: 1.36;
    text-align: center;
    color: #000;

    svg {
        position: absolute;
        left: -50%;
        transform: translateX(50%);
        display: inline-block;
    }
`

const PhoneName = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;

    line-height: 1.36;
    text-align: center;
    color: #000;

    svg {
        position: absolute;
        left: -50%;
        transform: translateX(50%);
        display: inline-block;
    }
`

const EmailField = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;

    line-height: 1.36;
    text-align: center;
    color: ${theme.colors.accent};

    svg {
        position: absolute;
        left: -50%;
        transform: translateX(50%);
        display: inline-block;
    }
`

const Field = styled.input`
    display: inline-block;
    padding: 8px 30px 8px;
    margin: 0 8px 22px 0;

    line-height: 1.36;
    color: #a5a5a5;
    
    &:first-child{
        margin-right: 8px;
    }
    
    & + &:nth-child(3){
        width: 100%;
        padding: 18px 0 0 30px;
        height: 152px;
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.primaryBg};
    }
    
`

const BtnContact = styled(Button)`
    width: 118px;
    height: 42px;
    border-radius: 9px;
    float: left;
`

const Location = styled.a`
    margin-bottom: 36px;
`

const Telephone = styled.a`
    margin-bottom: 36px;
`

const Email = styled.a`
    margin-bottom: 36px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 22px;
    margin-bottom: 196px;
    
`
const SideSoc1al = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 200px;
    height: 60px;

    border-radius: 25px 25px 0 0;
    background-color: ${theme.colors.primaryBg};

    position: absolute;

    left: 0;
    transform: translateX(-35%) rotate(90deg);
    transition-duration: 0.5s;
  
    svg {
        color: ${theme.colors.secondaryBg};
        cursor: pointer;
    }
    
    svg:hover {
        transform: translateY(-30%) rotate(-45deg);
        transition: all 0.3s ease;
        color: ${theme.colors.accent};
    }
    svg:not(:hover){
        transform: translateX(-35%) rotate(90deg);
        transition-duration: 0.5s;
    }
    
    @media ${theme.media.tablet}{
        display: none;
    }
`

const SocialItem = styled.li`
    transition: ${theme.animations.transition};
    &:hover {
        transform: translateY(10px) rotate(10deg) rotate(-20deg);
       
    }

`
const SocialLink = styled.a`

`

export const S = {
    Contacts,
    Form,
    FormIconWrapper,
    IconWrapper,
    PlaceName,
    PhoneName,
    EmailField,
    Field,
    BtnContact,
    Button,
    Location,
    Telephone,
    Email,
    SocialList,
    SideSoc1al,
    SocialItem,
    SocialLink,
}