import React from 'react'
import { useTranslation } from 'react-i18next';

interface HomeCardProps {
    sectionId : number;
    cardId: number;
    imgSrc: string;
}

const HomeCard: React.FC<HomeCardProps> = ({sectionId, cardId, imgSrc}) => {
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
                {t(`home.section${sectionId}.card${cardId}.title`)}
            </h3>
            <img src={imgSrc} alt="Card" className='rounded-md w-36 h-36'/>
            <p className='text-black text-xl'>
                {t(`home.section${sectionId}.card${cardId}.content`)}
            </p>
        </div>
    )
}

export default HomeCard
