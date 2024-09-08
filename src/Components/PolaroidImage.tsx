import React from 'react';
import OptionsBar from './OptionsBar';
import { useTranslation } from 'react-i18next';
import { ImageData } from '../Routes/Create';
import { useToPng } from '@hugocxl/react-to-image';

interface PolaroidImageProps {
    image: ImageData;
    id: number;
    onDelete: (id: number) => void;
    onEdit: (id: number, updatedData: Partial<ImageData>) => void;
}

const PolaroidImage: React.FC<PolaroidImageProps> = ({ image, onDelete, id, onEdit }) => {
    const { t } = useTranslation();
    
    const [, convertToPng] = useToPng<HTMLDivElement>({
        selector: '#polaroid',
        onSuccess: (data) => {
            const link = document.createElement('a');
            link.href = data;
            link.download = 'polaroid-image.png';
            link.click();
        }
    });

    const handleDateChange = (value: string) => {
        onEdit(id, { date: value });
    };

    return (
        <>
        <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start p-4 gap-4 font-sans">
            <div
                className="flex flex-col shadow-sm w-80 h-[30rem] shadow-black rounded-md font-semibold"
                style={{ backgroundColor: image.borderColor, color: image.textColor }}
                id='polaroid'
                
            >
                <div className="w-full h-10 flex items-center justify-center">
                    <p>{image.date}</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img
                        src={image.url}
                        className="w-72 h-72 rounded-md object-cover shadow-sm shadow-blue-dark bg-center bg-white"
                        alt="polaroid"
                        draggable="false"
                    />
                </div>
                <div className="w-full flex-1 pl-4 pr-4 pt-2 break-words">{image.text}</div>
            </div>
            <OptionsBar
                onChangeBorderColor={(color) => onEdit(id, { borderColor: color })}
                onChangeTextColor={(color) => onEdit(id, { textColor: color })}
                onAddText={(value) => onEdit(id, { text: value })}
                onAddDate={handleDateChange}
                onDelete={() => onDelete(id)}
                id={id}
                data={image}
            />
        </div>
            <button
                className="mt-4 p-2 bg-blue-dark text-white rounded mb-8"
                onClick={() => convertToPng()}
            >
                {t('create.dl')}
            </button>
        </>
    );
};

export default PolaroidImage;
