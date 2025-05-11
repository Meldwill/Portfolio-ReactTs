import {SectionSubTitle, SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from "./Contact_Styled.ts"
import React, {ElementRef, useRef} from "react";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_uei42ph', 'template_h1m03h1', form.current, {
                publicKey: 'Z1rbAcw3Gd1UfQooc',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact Us</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <SectionSubTitle>Get in Touch</SectionSubTitle>
                    <S.FormIconWrapper>
                        <S.Form ref={form} onSubmit={sendEmail}>
                            <S.Field required placeholder={"Name"} name={'user_name'}/>
                            <S.Field required placeholder={"Email"} name={'email'}/>
                            <S.Field required placeholder={"Message"} as={"textarea"} name={'message'}/>
                            <S.BtnContact type={"submit"}>Send</S.BtnContact>
                        </S.Form>
                        <S.IconWrapper>
                            <S.PlaceName>Location
                                <Icon iconId={"location"} height={"38"} width={"38"} viewBox={"0 0 38 38"}/>
                            </S.PlaceName>
                            <S.Location>Mashhad/Iran</S.Location>
                            <S.PhoneName>Phone
                                <Icon iconId={"telephone"} height={"38"} width={"38"} viewBox={"0 0 38 38"}/>
                            </S.PhoneName>
                            <S.Telephone href={"+989150063913"}>+989150063913</S.Telephone>
                            <S.EmailField>Email
                                <Icon iconId={"email"} height={"38"} width={"38"} viewBox={"0 0 38 38"}/>
                            </S.EmailField>
                            <S.Email href={"mailto:arkn3913@gmail.com"}>arkn3913@gmail.com</S.Email>
                        </S.IconWrapper>
                    </S.FormIconWrapper>
                    <S.SocialList>
                        <S.SideSoc1al>
                            <Icon iconId={"instagram-white"} width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
                            <Icon iconId={"whatsapp-white"} width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
                            <Icon iconId={"instagram-white"} width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
                        </S.SideSoc1al>
                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon height={"33px"} width={"33px"} viewBox={"0 0 33 33"} iconId={"instagram"}/>
                            </S.SocialLink>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon height={"33px"} width={"33px"} viewBox={"0 0 33 33"} iconId={"WhatsApp"}/>
                            </S.SocialLink>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialLink>
                                <Icon height={"33px"} width={"33px"} viewBox={"0 0 33 33"} iconId={"telegram"}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    </S.SocialList>
                </FlexWrapper>

            </Container>
        </S.Contacts>
    );
};

