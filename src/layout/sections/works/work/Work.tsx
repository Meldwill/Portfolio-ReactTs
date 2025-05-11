
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import { S } from "./Works_Styles.ts";



type WorkPropsType = {
    title: string;
    Btn: string;
    src: string;
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType ) => {
    return (
        <S.Work>
            <S.ImgWrapper>
                <S.Image src={props.src} alt=""/>
                <S.Button>OPEN</S.Button>
            </S.ImgWrapper>
            <S.Title>{props.title}</S.Title>
            <FlexWrapper justify={'flex-center'}>
                <S.BtnWork as="a" href={"#"}>Edit for you</S.BtnWork>
                <S.Link href={"#"}>see preview</S.Link>
            </FlexWrapper>
        </S.Work>
    );
};

