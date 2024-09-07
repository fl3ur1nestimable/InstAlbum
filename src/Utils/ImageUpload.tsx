import React, { useState } from 'react';

interface ImageUploadProps {
    onImagesAdded: (images: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesAdded }) => {
    const [dragging, setDragging] = useState(false);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            const images = Array.from(files).map((file) => URL.createObjectURL(file));
            onImagesAdded(images);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const images = Array.from(files).map((file) => URL.createObjectURL(file));
            onImagesAdded(images);
        }
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setDragging(true)}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`absolute w-full h-32 border-2 border-dashed 'flex' justify-center items-center z-50 pointer-events-none`}
        >
            {dragging &&
                <div className={`bg-black bg-opacity-50 w-full h-full flex justify-center items-center`}>
                    <p className='text-white text-2xl'>
                        Drop the files here
                    </p>
                </div>
            }
            <input type="file" multiple className="hidden" onChange={handleFileChange} />
        </div>
    );
};

export default ImageUpload;
