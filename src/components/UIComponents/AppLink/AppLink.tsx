import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps{
    linkUrl?:string;
    className:string;
    lableText:string;
}
const AppLink:React.FC<NavLinkProps>=({linkUrl = "/", className, lableText})=>{
    return (
        <>
         <Link to={linkUrl} className={className}>{lableText}</Link>
        </>
    );
};
export default AppLink;