import {S} from "./../HeaderMenu_Styles.ts";

type TabsStatusType = "Story" | "Post" | "Banner" | "Trailer" | "Design" | "More"

type WorksMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value:TabsStatusType  ) => void,
    currentFilterStatus: string
}


export const WorksMenu = (props: WorksMenuPropsType) => {
    return (
        <S.WorksMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.LinkItem
                            active={props.currentFilterStatus === item.status}
                            as={"button"}
                            onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</S.LinkItem>
                    </S.ListItem>
                })}
            </ul>
        </S.WorksMenu>
    );
};


