import React, { ReactElement } from 'react';
import type { AnimationConfig } from 'lottie-web';
import type { Animation } from './utils';
declare type Props = {
    animation: Animation;
    reverse?: boolean;
    strokeColor?: string;
    pathCss?: string;
    options?: Partial<AnimationConfig>;
    size?: number;
    loop?: AnimationConfig['loop'];
    autoplay?: AnimationConfig['autoplay'];
    speed?: number;
    wrapperStyle?: React.CSSProperties;
    render?: (eventProps: any, animationProps: any) => ReactElement;
} & React.HTMLProps<HTMLDivElement>;
declare const UseAnimations: React.FC<Props>;
export default UseAnimations;
