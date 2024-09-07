import React from 'react';
import OptionsBar from './OptionsBar';
import { useTranslation } from 'react-i18next';
import { ImageData } from '../Routes/Create';

interface PolaroidImageProps {
    image: ImageData;
    id: number;
    onDelete: (id: number) => void;
    onEdit: (id: number, updatedData: Partial<ImageData>) => void;
  }
  
  const PolaroidImage: React.FC<PolaroidImageProps> = ({ image, onDelete, id, onEdit }) => {
    const { t } = useTranslation();
  
    const handleDateChange = (value: string) => {
      const date = new Date(value);
      const options = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
      const formattedDate = date.toLocaleDateString(t('create.locale'), options);
      onEdit(id, { date: formattedDate });
    };
  
    return (
      <div className="relative flex flex-col justify-center items-center p-4 gap-4 font-sans">
        <div
          className="flex flex-col shadow-sm w-80 h-[30rem] shadow-black rounded-md font-semibold"
          style={{ backgroundColor: image.borderColor, color: image.textColor }}
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
          data = {image}
        />
      </div>
    );
  };
  
  export default PolaroidImage;
  
