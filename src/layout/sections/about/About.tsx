import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./About_Styled.ts";




export const About: React.FC = () => {
    return (
        <S.About id={"about"}>
            <Container>
                <FlexWrapper>
                    <S.WrapperBlur>
                        <S.PersonInfo>
                            <S.IconWrapper>
                                <Icon iconId={"whatsapp-white"} height={"26"} width={"26"} viewBox={"0 0 26 26"}/>
                                <Icon iconId={"instagram-white"} height={"26"} width={"26"} viewBox={"0 0 26 26"}/>
                                <Icon iconId={"arrow-up"} height={"26"} width={"26"} viewBox={"0 0 26 26"}/>
                            </S.IconWrapper>
                            <S.NameInfo>
                                I’m <span>Alireza</span> <br/>Kavousy nezjad
                            </S.NameInfo>
                            <S.DescribePerson>
                                <S.DescribePersonItem>I was born in Iran-Mashhad=</S.DescribePersonItem>
                                <S.DescribePersonItem>I’m 36 years old</S.DescribePersonItem>
                                <S.DescribePersonItem>I have started my interest in this field from 2019</S.DescribePersonItem>
                                <S.DescribePersonItem>I’m designer , video editor , web developer and ...</S.DescribePersonItem>
                                <S.DescribePersonItem>My phone number in Iran +989212073348</S.DescribePersonItem>
                            </S.DescribePerson>
                        </S.PersonInfo>
                    </S.WrapperBlur>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};



