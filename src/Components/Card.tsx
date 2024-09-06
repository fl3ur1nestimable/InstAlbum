import React from 'react'
import { useTranslation } from 'react-i18next';

interface CardProps {
    content : string[];
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({content ,imgSrc}) => {
    const { t } = useTranslation();

    return (
        <div className='rounded-md 
                        bg-opacity-50 
                        hover:bg-opacity-100 
                        bg-white 
                        transition-all 
                        duration-200 
                        flex flex-col 
                        max-w-xs
                        p-4
                        items-center
                        text-center
                        gap-4
                        flex-1'
                        >
            <h3 className='text-red font-bold text-3xl'>
                {t(content[0])}
            </h3>
            <img src={imgSrc} alt="Card" className='rounded-md w-36 h-36'/>
            <p className='text-black text-xl'>
                {t(content[1])}
            </p>
        </div>
    )
}

export default Card
