import React from 'react';
import { FaPlus } from "react-icons/fa";

interface ImageBarProps {
    images: string[];
    currentImage: number;
    onImageClick: (index: number) => void;
    onImageAdd: (images: string[]) => void;
}


const ImageBar: React.FC<ImageBarProps> = ({ images, currentImage, onImageClick, onImageAdd}) => {

    const handleImageAdd = () =>{
        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
        if(input){
            input.click();
        }
        input?.addEventListener('change', () => {
            const files = input.files;
            if (files && files.length > 0) {
                const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
                onImageAdd(newImages);
            }
        });
        
    }

    return (
        <div className="flex flex-wrap gap-4 p-2 border-red rounded-md border-4 bg-rose-pale m-auto">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className={`w-16 h-16 object-cover transition-opacity duration-200 cursor-pointer ${index === currentImage ? 'opacity-100' : 'opacity-50'}`}
                    alt="thumbnail"
                    onClick={() => onImageClick(index)}
                    draggable={false}
                />
            ))}
            <button onClick={() => handleImageAdd()}>
                <FaPlus className="w-16 h-16 object-cover transition-opacity duration-200 cursor-pointer text-blue-dark" />
            </button>
            <input type="file" accept="image/*" multiple hidden />
        </div>
    );
};

export default ImageBar;
