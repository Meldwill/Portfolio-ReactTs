import styled from "styled-components";
import {theme} from "../../styles/Theme/Theme.ts";

const Slider = styled.div`
    //border: 1px solid red;
    width: 100%;
    max-width: 500px;
    border-radius: 0 0 25px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 60px;
    box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.07);
    z-index: 1;
`

const Slide = styled.div` 
    text-align: center;
`
const Text = styled.p`
    
`
const Name = styled.span`
    font-family: 'Kalameh', sans-serif;
    margin: 22px 0 42px;
    display: inline-block   ;
`

const Pagination = styled.span`
    margin-bottom: 8px;
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        transition: .2s ease-in-out;
        
        border-radius: 20px;
        background-color: ${theme.colors.primaryBg};

        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.primaryBg};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}