import {Logo} from '../../components/logo/Logo.tsx';
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from "./Header_Styles.ts"
import React from "react";


export const Header: React.FC = () => {

        const [width, setWidth] = React.useState(window.innerWidth);
        const breakpoint = 792;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                            <Logo/>

                            {width < breakpoint ? <MobileMenu/>
                                                : <DesktopMenu/>}

                    </FlexWrapper>
                </Container>
        </S.Header>
    );
};

