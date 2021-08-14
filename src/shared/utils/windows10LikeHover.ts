import { MouseEvent } from "react";

const makeWindows10LikeHover = (event:MouseEvent, element:HTMLElement) => {

    // getting cureent position coordinates
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    
    // applying styles
    element.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
    element.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
}

export default makeWindows10LikeHover;

export const resetStyles = (element:HTMLElement) => {
    element.style.background = "transparent";
    element.style.borderImage = "initial";
}