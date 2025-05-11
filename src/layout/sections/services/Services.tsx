import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionSubTitle, SectionTitle} from "../../../components/SectionTitle.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import {S} from "./Services_Styled.ts"


export const Services: React.FC = () => {
    return (
        <S.Services id={"services"}>
            <SectionTitle>
                Services
            </SectionTitle>
            <FlexWrapper direction="row" justify="center">
                <S.ViewCard>
                    <Icon iconId={"video-edit"}/>
                    <SectionSubTitle>Video Edit <br/>Service</SectionSubTitle>
                    <S.View>
                        <S.ViewLink as={S.ViewLink} href={"#"}>
                            View more
                        </S.ViewLink>
                        <Icon iconId={"Arrow-Right"} height={"21"} width={"21"} viewBox={"0 0 21 21"}/>
                    </S.View>
                </S.ViewCard>
                <S.ViewCard>
                    <Icon iconId={"ui-design"}/>
                    <SectionSubTitle>Ui/Ux <br/>Designer</SectionSubTitle>
                    <S.View>
                        <S.ViewLink as={S.ViewLink} href={"#"}>
                            View more
                        </S.ViewLink>
                        <Icon iconId={"Arrow-Right"} height={"21"} width={"21"} viewBox={"0 0 21 21"}/>
                    </S.View>
                </S.ViewCard>
                <S.ViewCard>
                    <Icon iconId={"website"}/>
                    <SectionSubTitle>Website <br/> Developer</SectionSubTitle>
                    <S.View>
                        <S.ViewLink as={S.ViewLink} href={"#"}>
                            View more
                        </S.ViewLink>
                        <Icon iconId={"Arrow-Right"} height={"21"} width={"21"} viewBox={"0 0 21 21"}/>
                    </S.View>
                </S.ViewCard>
            </FlexWrapper>
        </S.Services>
    );
};

