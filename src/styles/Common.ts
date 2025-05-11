import {theme} from "./Theme/Theme.ts";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) =>`
    font-family: ${family || "Roboto"};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.6};
    color: ${color || theme.colors.font};
    // font-size: clamp(8px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px ), 60px);
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`

