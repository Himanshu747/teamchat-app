import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    noImageSrc?:string;
}
const Image:React.FC<ImageProps>=({src,alt,noImageSrc,...otherAttr})=>{
    return(
        <>
         <img src={src} alt={alt} {...otherAttr}/>
        </>
    );
}
export default Image;