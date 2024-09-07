import Header from '../Components/Header';
import React from 'react';
import ImageBar from '../Components/ImageBar';
import PolaroidImage from '../Components/PolaroidImage';
import Button from '../Components/Button';

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
  const [downLoadOption, setDownLoadOption] = React.useState(0);
  const downloadOptions = ["gif", "video", "images"];

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
          <div className='flex flex-col items-center mb-8 gap-4'>
            <PolaroidImage
              image={images[currentImage]}
              id={currentImage}
              onDelete={handleImageDelete}
              onEdit={handleEdit}
            />
            <p className="text-2xl text-blue-dark font-semibold">
              Download Options
            </p>
            <div>
              {// 3 buttons for download options and cahnge bg color if selected
              }
              {downloadOptions.map((option, index) => (
                <button
                  key={index}
                  className={`p-2 m-2 w-20 bg-blue-dark text-white rounded-md ${downLoadOption === index ? "bg-blue-dark" : "bg-blue-pale"
                    }`}
                  onClick={() => setDownLoadOption(index)}
                >
                  {option}
                </button>
              ))}
            </div>
              <Button
                text="Download"
              />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-2xl text-blue-dark font-semibold">
              Please add an image to start
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
