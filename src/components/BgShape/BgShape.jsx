import { useEffect, useState } from 'react';
import { getRandomDeg, getRandomPositionX } from '../../tools/get-random';
import css from './bgshape.module.scss';
export const BgShape = () => {
  const [customStyleElem, setCustomStyleElem] = useState({});

  const deg = getRandomDeg();
  const right = getRandomPositionX();

  useEffect(() => {
    setCustomStyleElem({
      positionY: Number(document.querySelector('body').scrollHeight) / 2,
      right: getRandomPositionX(),
      deg: getRandomDeg(),
    });
  }, []);
  return (
    <div
      className={css.BgShape}
      style={{
        right: customStyleElem?.right,
        height: '15%',
        width: '60%',
        transform: `rotate(${customStyleElem?.deg})`,
        top: customStyleElem?.positionY,
      }}
    ></div>
  );
};
