import React from 'react';
import { ImageComponent } from './ImageComponent';

export const Card = ({ title, text, img, alt, hash }) => {
 
    return (
        <div className="flex-col w-[400px] h-2/3 ml-10 p-4 rounded-lg justify shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5 dark:border-2 dark:shadow-white dark:shadow-lg s:w-4/5 s:h-4/5" onClick={() => window.open("https://github.com/Neson55/Website-Front")}>
        
            <ImageComponent src={img} alt={alt} hash={hash} />
            <p className="text-center mt-4 text-2xl font-bold m:text-lg dark:text-white">{title}</p>
            <br />
            <p className="dark:text-white m:text-sm">{text}</p>
        </div>
    );
};