import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import './../../styles/slider.css';

type SliderPropsType = {
    text: string,
    userName: string,

}


const Slide = (props: SliderPropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={"YURII NAUMENKO"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book`}/>,

    <Slide userName={"KAPITON LEPIRODLO"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book`}/>,

    <Slide userName={"Johnee very deep"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book`}/>,
];

export const Slider = () =>
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}/>
    </S.Slider>


