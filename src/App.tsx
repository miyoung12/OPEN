import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from '../src/pages/Main';
import Main2 from '../src/pages/Main2';
import './App.css';
import Landing from './pages/Landing';
import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import socket from './socket';

function App() {
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState(null);
  // //소켓과 관련된 코드
  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('connected to server');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('disconnected from server');
  //   });

  //   // 소켓 이벤트 리스너 등록
  //   socket.on('barcode', (barcodeData: React.SetStateAction<null>) => {
  //     setData(barcodeData);
  //   });

  //   // 컴포넌트 unmount 시, 소켓 이벤트 리스너 제거
  //   return () => {
  //     socket.off('barcode');
  //   };
  // }, []);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route
            path="/green"
            element={<Main />}
          />
          <Route
            path="/yellow"
            element={<Main2 />}
          />
          <Route
            path="/"
            element={<Landing />}
          />
          {/* <div> */}
          {/* {data ? (
              <div>
                <h1>Barcode Data</h1>
                <p>{data}</p>
              </div>
            ) : (
              <p>No data yet.</p>
            )} */}
          {/* </div> */}
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
