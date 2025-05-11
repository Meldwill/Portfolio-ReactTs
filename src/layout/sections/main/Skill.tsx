import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from "./Main_Styles.ts"


type SkillPropsType = {
    iconId: string;
    title: string;
    background?: string;
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.IconWrapper>
                <Icon iconId={props.iconId}/>
            </S.IconWrapper>
            <S.SkillText>{props.title}</S.SkillText>
        </S.Skill>
    );
};

