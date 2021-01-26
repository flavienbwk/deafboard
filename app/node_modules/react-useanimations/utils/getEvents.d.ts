import type { AnimationEffect } from './constants';
declare const getEvents: ({ animation, reverse, animEffect, }: {
    animation: any;
    reverse: boolean;
    animEffect: AnimationEffect;
}) => {
    onClick: () => any;
} | {
    onMouseEnter: () => any;
    onMouseLeave: () => any;
};
export default getEvents;
