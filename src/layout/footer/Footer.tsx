import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer-_Styled.ts";

export const Footer: React.FC = () => {
    return (    
        <S.Footer>
            <FlexWrapper direction="column" align="center">
                <S.Name>Coded by Alireza Kavousy nezhad</S.Name>
                <S.Copyright>All Rights Reserved 2022@</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

