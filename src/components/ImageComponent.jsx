import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

 export const ImageComponent = ({src, hash, alt}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(()=>{
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src
    },[src])

    return (
        <>
        <div style={{display: imageLoaded?"none":"inline"}} >
        {window.innerWidth <= 700?<Blurhash
        hash={hash}
        width={282}
        height={334}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        />:window.innerWidth<=1400?<Blurhash
        hash={hash}
        width={323}
        height={343}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        />:<Blurhash
        hash={hash}
        width={364}
        height={352.88}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        />}
       </div>
       <img 
        src={src}
        alt={alt}
        className="flex w-full h-2/3 sm:h-2/3 m:h-60 rounded-md"
        style={{display: !imageLoaded?"none":"inline"}}
        />
        </>
    );
};