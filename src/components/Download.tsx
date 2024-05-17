import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { getDate } from './Date';

const Download: React.FC = () => {
  const imgFrameRef = useRef<HTMLDivElement>(null);

  const capture = () => {
    isValidate();

    if (!imgFrameRef.current) {
      console.error('Element not found');
      return;
    }

    html2canvas(imgFrameRef.current).then((canvas) => {
      saveAs(canvas.toDataURL('image/jpg'), `${getDate()}.jpg`);
    });
  };

  const isValidate = () => {
    // Validation logic here
  };

  return (
    <div
      ref={imgFrameRef}
      className="img-frame"
    >
      <button
        className="capture-button"
        onClick={capture}
      >
        Capture
      </button>
    </div>
  );
};

export default Download;
