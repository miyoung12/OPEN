import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { getDate } from '../components/Date';

const Main = () => {
  const [images, setImages] = useState<Array<string | null>>([null, null, null, null]);
  const fileInputs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);
  const imgFrameRef = useRef<HTMLDivElement>(null); // Ref 추가

  const onChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const newImages = [...images];
          newImages[index] = reader.result;
          setImages(newImages);
        }
      };
    }
  };

  const handleDownload = () => {
    if (!imgFrameRef.current) {
      console.error('Image frame not found');
      return;
    }

    html2canvas(imgFrameRef.current).then((canvas) => {
      saveAs(canvas.toDataURL('image/jpg'), `${getDate()}.jpg`);
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-gray-200">
      <div className="flex flex-col justify-center items-center relative w-[393px] h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center w-[393px] h-[920px] bg-inherit">
          <div
            ref={imgFrameRef}
            className="flex flex-col items-center w-[280px] h-[770px] mx-auto my-0 pt-[20px] pb-[40px] transform translateY-45 bg-black"
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="w-[236px] h-[163px] relative mb-[16px] bg-white overflow-hidden object-cover"
                onClick={() => {
                  fileInputs.current && fileInputs.current[index]?.click();
                }}
                src={image || 'src/assets/blank.png'}
              />
            ))}
            <div className="flex flex-col mt-[16px] text-center text-white">
              <span className="mb-[2px] font-[16px]">OPEN</span>
              <span className="mb-[2px] font-[20px]">하늘네컷</span>
              <span className="font-[12px] font-lighter">2024.05.17</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full gap-10 pb-[40px]">
          <button className="flex w-[122px] h-[50px] items-center justify-center font-[12px] text-center text-white border-none rounded-[12px] bg-[#309FB0] hover:bg-black hover:text-white hover:scale-110">
            프레임 선택
          </button>
          <button
            className="flex w-[122px] h-[50px] items-center justify-center font-[12px] text-center text-white border-none rounded-[12px] bg-[#309FB0] hover:bg-black hover:text-white hover:scale-110"
            onClick={handleDownload}
          >
            이미지 다운로드
          </button>
        </div>
        {images.map((_, index) => (
          <input
            key={index}
            type="file"
            className="hidden"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => onChange(index, e)}
            ref={(el) => {
              if (el && fileInputs.current) fileInputs.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
