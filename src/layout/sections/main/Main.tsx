import photo from "../../../Assets/images/photo.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Skill} from "./Skill.tsx";
import {S} from "./../main/Main_Styles.ts";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

const skillData = [
    {
        iconId: "Ellipse-ps",
        title: "Photoshop"

    },

    {
        iconId: "Ellipse-ae",
        title: "After effects"

    },

    {
        iconId: "Ellipse-ai",
        title: "Illustrator"

    },

    {
        iconId: "Ellipse-figma",
        title: "Figma"

    },
]

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <S.CrossRotate>+</S.CrossRotate>
                <S.CrossWrapper>
                    <FlexWrapper align={"start"} justify={"flex-start"} wrap={"wrap"}>
                        <S.WrapperBlur display={"flex"} align={"start"}>
                            <Tilt className="tilt-img"
                                  tiltMaxAngleX={35}
                                  tiltMaxAngleY={35}
                                  perspective={900}
                                  scale={0.9}
                                  transitionSpeed={2000}
                                  gyroscope={true}>
                                <S.Photo src={photo} alt=""/>

                            </Tilt>
                            <S.TextBlock>
                                <S.Name>
                                    <p>I’m Alireza Kavousy nezjad</p>
                                    <Typewriter
                                        options={{
                                            strings: ['I’m Alireza', 'Kavousy nezjad'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                        }}
                                    />
                                </S.Name>
                                <S.Describe>
                                    Draft is a revolutionary mobile app built to
                                    help you manage your business easily and
                                    save your money.
                                </S.Describe>
                                <FlexWrapper align={"center"} justify={"flex-start"}>
                                    <S.BtnMain as={"a"} href={"#"}>See Projects
                                        <Icon iconId={"Arrow-Right2"} width={"28"} height={"28"}
                                              viewBox={"0 0 28 28"}/>
                                    </S.BtnMain>
                                    <S.Resumelink href={"#"}>Download Resume</S.Resumelink>
                                </FlexWrapper>
                            </S.TextBlock>
                        </S.WrapperBlur>
                    </FlexWrapper>
                </S.CrossWrapper>
                <S.Skills>
                    <FlexWrapper align={"flex-end"} justify={"end"} wrap={"wrap"}>

                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}/>
                        })}
                    </FlexWrapper>
                </S.Skills>
            </Container>
        </S.Main>
    );
};

