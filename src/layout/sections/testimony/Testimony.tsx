import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme/Theme.ts";
import { Container } from "../../../components/Container.ts";


export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align={"center"}>
                    <Icon iconId={"ui-design"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${theme.colors.secondaryBg};
    position: relative;
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