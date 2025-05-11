import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work";
import socialImg from "../../../Assets/images/projects-1.webp";
import socialImg2 from "../../../Assets/images/projects-2.webp";
import socialImg3 from "../../../Assets/images/projects-3.webp";
import socialImg4 from "../../../Assets/images/projects-4.webp";
import {Container} from "../../../components/Container";
import {WorksMenu} from "../../header/headerMenu/worksMenu/WorksMenu.tsx";
import {S} from "./work/Works_Styles.ts";
import {useState} from "react";
import {Fade} from "react-awesome-reveal";
import {AnimatePresence, motion} from "motion/react"


const tabsItems:
    Array<{
        status: "Story"
            | "Post"
            | "Banner"
            | "Trailer" | "Design"
            | "More",
        title: string
    }> = [
    {
        title: "Story",
        status: "Story",
    },

    {
        title: "Post",
        status: "Post",
    },

    {
        title: "Banner",
        status: "Banner",
    },

    {
        title: "Trailer",
        status: "Trailer",
    },

    {
        title: "Design",
        status: "Design",
    },

    {
        title: "More",
        status: "More",
    },
]

const worksData = [
    {
        src: socialImg,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Story",
        id: 1
    },

    {
        src: socialImg2,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Post",
        id: 2
    },

    {
        src: socialImg3,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Banner",
        id: 3
    },

    {
        src: socialImg4,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Trailer",
        id: 4
    },

    {
        src: socialImg,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Design",
        id: 5
    },

    {
        src: socialImg2,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "More",
        id: 6
    },

    {
        src: socialImg3,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Story",
        id: 7
    },

    {
        src: socialImg4,
        title: "Story motion for sale English cources",
        Btn: "Edit for you",
        type: "Post",
        id: 8
    },
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("Story")
    let filteredWorks = worksData

    if (currentFilterStatus === "Post") {
        filteredWorks = worksData.filter(work => work.type === "Post")
    }

    if (currentFilterStatus === "Banner") {
        filteredWorks = worksData.filter(work => work.type === "Banner")
    }

    if (currentFilterStatus === "Trailer") {
        filteredWorks = worksData.filter(work => work.type === "Trailer")
    }

    if (currentFilterStatus === "Design") {
        filteredWorks = worksData.filter(work => work.type === "Design")
    }

    if (currentFilterStatus === "More") {
        filteredWorks = worksData.filter(work => work.type === "More")
    }

    function changeFilterStatus(value: "Story" | "Post" | "Banner" | "Trailer" | "Design" | "More") {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <FlexWrapper justify="space-around" align={"center"}>
                    <WorksMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                               currentFilterStatus={currentFilterStatus}/>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true}>

                        <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                            <AnimatePresence>

                                {filteredWorks.map((w) => {
                                    return (

                                        <motion.div
                                                    layout
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    exit={{opacity: 0}}

                                        >
                                            <Work src={w.src}
                                                  title={w.title}
                                                  Btn={w.Btn}
                                                  key={w.id}
                                            />
                                        </motion.div>

                                    )
                                })}

                            </AnimatePresence>

                        </FlexWrapper>

                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

