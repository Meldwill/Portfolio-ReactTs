import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        });
    }, [])

    return (

        <>

            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"GoTop"} width={"16"} height={"16"} viewBox={"0 0 50 50"}/>
                </StyledGoTopBtn>)}

        </>


    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 9999;
`