import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <a onClick={()=> {scroll.scrollToTop()}}>
           <Icon iconId={'logo'} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
        </a>
    );
};

