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
      console.error('Image∂ not found');
      return;
    }

    const imgFrame = imgFrameRef.current;
    const { offsetWidth, offsetHeight } = imgFrame;
    html2canvas(imgFrame, { width: offsetWidth, height: offsetHeight }).then((canvas) => {
      saveAs(canvas.toDataURL('image/jpeg'), `${getDate()}.jpg`);
    });
  };

  // 이미지를 2x2 그리드 형태로 묶기
  const gridImages = [];
  for (let i = 0; i < images.length; i += 2) {
    gridImages.push(images.slice(i, i + 2));
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center relative w-screen h-screen">
        <div className="flex flex-col justify-center items-center w-screen h-[600px] bg-inherit">
          <div
            ref={imgFrameRef}
            className="flex flex-col items-center w-[850px] h-[550px] mx-auto my-0 pt-[40px] transform translateY-45 bg-[#f3e887]"
          >
            {gridImages.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex mb-5"
              >
                {row.map((image, colIndex) => (
                  <img
                    key={colIndex}
                    className="w-[368px] h-[207px] relative mx-2 bg-white overflow-hidden object-cover"
                    onClick={() => {
                      const index = rowIndex * 2 + colIndex;
                      fileInputs.current && fileInputs.current[index]?.click();
                    }}
                    src={image || 'src/assets/blank.svg'}
                  />
                ))}
              </div>
            ))}
            <div className="flex flex-col mt-[6px] text-center text-white">
              <img
                className="flex w-[100px] pb-[13px]"
                // src="src/assets/open.png"
                src="src/assets/logo_g.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full gap-10 pb-[20px]">
          {/* <button className="flex w-[122px] h-[50px] items-center justify-center font-[12px] text-center text-[#309fb0] border-none rounded-[12px] bg-[#f3e887] hover:bg-gray-600 hover:text-[#f3e887] hover:scale-110">
            프레임 선택
          </button> */}
          <button
            className="flex w-[150px] h-[50px] items-center justify-center font-bold font-[12px] text-center text-[#309fb0] border-none rounded-[12px] bg-[#f3e887] hover:bg-gray-600 hover:text-[#f3e887]  hover:scale-110"
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
