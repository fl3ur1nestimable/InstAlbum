import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageData } from '../Routes/Create';

interface OptionsBarProps {
    onChangeBorderColor: (color: string) => void;
    onChangeTextColor: (color: string) => void;
    onAddText: (value : string) => void;
    onAddDate: (value : string) => void;
    onDelete: (id : number) => void;
    id : number;
    data : ImageData;
}

const OptionsBar: React.FC<OptionsBarProps> = ({onChangeBorderColor, onChangeTextColor, onAddText, onAddDate, onDelete ,id , data}) => {

  const { t } = useTranslation();
  
  const handleTextChange = (e: any) => {
    onAddText(e.target.value);
  }

  const handleDateChange = (e: any) => {
    onAddDate(e.target.value);
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-blue-pale rounded-md shadow-md">
      <label className='flex gap-2'>
        {t('create.bg')} : 
        <input type="color"  value={data.borderColor} onChange={(e) => onChangeBorderColor(e.target.value)} className='cursor-pointer border-none'/>
      </label>
      <label className='flex'>
        {t('create.text')} :
        <input type="color"  value={data.textColor} onChange={(e) => onChangeTextColor(e.target.value)} className='cursor-pointer border-none' />
      </label>
      <input type="text" value={data.text} maxLength={130} placeholder={t('create.placeholder')} onChange={handleTextChange} className='p-2 rounded-md' />
      <input type="date"  onChange = {handleDateChange} className='p-2 rounded-md'/>
      <button className='p-2 bg-blue-dark text-white rounded-md' onClick= {() => onDelete(id)}>
        {t('create.del')}
      </button>
    </div>
  );
};

export default OptionsBar;
