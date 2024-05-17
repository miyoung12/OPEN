import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGreenClick = () => {
    navigate('/green');
  };
  const handleYellowClick = () => {
    navigate('/yellow');
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center gap-[80px] font-[LINE]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          //   ease: 'easeInOut',
          duration: 1,
        }}
        // className="animate-flip-vertical-fwd"
        // style={{
        //   transformStyle: 'preserve-3d', // 양면이 있는 3d 박스임을 명시
        // }}
      >
        <div
          className="animate-flip-vertical-fwd relative"
          style={{
            transformStyle: 'preserve-3d', // 양면이 있는 3d 박스임을 명시
          }}
        >
          <img
            className="w-[450px] absolute"
            style={{
              backfaceVisibility: 'hidden', // 뒷면이 보이지 않게
            }}
            src="src/assets/photo_g.svg"
            alt=""
          />
          <img
            className="w-[450px]"
            style={{
              transform: 'rotateY(180deg) translateZ(1px)', // 미리 뒤집어 놓기
              filter: 'drop-shadow(0 0 12px rgba(0, 0, 0, 0.342))',
            }}
            src="src/assets/photo_y.svg"
            alt=""
          />
        </div>
      </motion.div>
      <div className="flex flex-col items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{
            //   ease: 'easeInOut',
            duration: 1,
          }}
          className="w-[400px] mb-[10px]"
          src="src/assets/main.png"
          alt=""
        />
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{
            //   ease: 'easeInOut',
            duration: 1,
            delay: 0.4,
          }}
          className="flex text-[50px]"
        >
          하늘네컷
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{
            //   ease: 'easeInOut',
            duration: 1,
            delay: 0.4,
          }}
          className="mb-[100px] text-center"
        >
          또 나를 위해 기도하기를 내게 말씀을 주셔서 입을 열어
          <br />
          복음의 비밀을 담대하게 알릴 수 있게 해 달라고 기도해 주십시오.
          <br />
          에베소서 6:19
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            //   ease: 'easeInOut',
            duration: 1,
            delay: 1.2,
          }}
          className="flex gap-[5px] mb-[10px] animate-bounce"
        >
          <img
            className="w-[10px]"
            src="src/assets/icon.svg"
            alt=""
          />
          <span>프레임 선택하기</span>
          <img
            className="w-[10px]"
            src="src/assets/icon.svg"
            alt=""
          />
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{
            //   ease: 'easeInOut',
            duration: 1,
            delay: 0.6,
          }}
          className="flex gap-[20px]"
        >
          <button
            className="flex w-[100px] h-[40px] items-center justify-center font-[12px] font-semibold text-center text-[#f3e887] border-none rounded-[12px] bg-[#309FB0] hover:bg-gray-600 hover:text-[#f3e887] hover:scale-110"
            style={{
              filter: 'drop-shadow(0 0 12px #309fb088)',
            }}
            onClick={handleGreenClick}
          >
            오픈 그린
          </button>

          <button
            className="flex w-[100px] h-[40px] items-center justify-center font-[12px] font-semibold text-center text-[#309fb0] border-none rounded-[12px] bg-[#f3e887] hover:bg-gray-600 hover:text-[#f3e887] hover:scale-110"
            style={{
              filter: 'drop-shadow(0 0 12px #f3e887a7)',
            }}
            onClick={handleYellowClick}
          >
            오픈 옐로우
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
