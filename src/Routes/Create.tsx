import Header from '../Components/Header';
import React from 'react';
import ImageBar from '../Components/ImageBar';
import PolaroidImage from '../Components/PolaroidImage';
import { t } from 'i18next';

export interface ImageData {
  url: string;
  text: string;
  date: string;
  textColor: string;
  borderColor: string;
}

const Create: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [images, setImages] = React.useState<ImageData[]>([]);

  const handleImageAdd = (imgs: string[]) => {
    const newImages = imgs.map((img) => ({
      url: img,
      text: "",
      date: "",
      textColor: "#000000",
      borderColor: "#F5F5FF"
    }));
    setImages([...images, ...newImages]);
    setCurrentImage(images.length);
  };

  const handleImageDelete = (id: number) => {
    setImages((prev) => prev.filter((_, index) => index !== id));
    setCurrentImage(0);
  };

  const handleEdit = (id: number, updatedData: Partial<ImageData>) => {
    setImages((prev) =>
      prev.map((img, index) =>
        index === id ? { ...img, ...updatedData } : img
      )
    );
  };

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-col items-center'>
        <div className="flex flex-col gap-8 p-4 xl:pr-40 xl:pl-40 z-0">
          <ImageBar
            images={images.map(img => img.url)}
            currentImage={currentImage}
            onImageClick={(index) => setCurrentImage(index)}
            onImageAdd={handleImageAdd}
          />
        </div>
        {images.length > 0 ? (
          <div className='flex flex-col items-center'>
            <PolaroidImage
              image={images[currentImage]}
              id={currentImage}
              onDelete={handleImageDelete}
              onEdit={handleEdit}
            />
          </div>
        ) : (
          <div className="absolute top-1/2 flex justify-center items-center">
            <p className="text-2xl text-blue-dark font-semibold">
              {t('create.msg')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
