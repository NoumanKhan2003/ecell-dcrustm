import { CSSProperties, ReactNode } from 'react';
import { MouseSettings } from '../types/index.js';
export declare function UpdateFollower({ mouseOptions, style, className, onMouseEnter, onMouseLeave, onClick, children, }: {
    mouseOptions?: MouseSettings;
    style?: CSSProperties;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
