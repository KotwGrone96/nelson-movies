import style from './banner.module.css';
import Image from 'next/image';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.jpg';
import img4 from '../../assets/banner4.jpg';
import img5 from '../../assets/banner5.jpg';
import { useRef, useState, useEffect } from 'react';

export default function Banner() {
  const images = useRef();
  const [currentImg, setCurrentImg] = useState(0);

  const before = (e) => {
    if (currentImg === 0) {
      setCurrentImg(4);
      return;
    }
    setCurrentImg(currentImg - 1);
  };
  const next = (e) => {
    if (currentImg === 4) {
      setCurrentImg(0);
      return;
    }
    setCurrentImg(currentImg + 1);
  };

  useEffect(() => {
    const imgs = Object.values(images.current.children);
    imgs.forEach((img) => img.classList.remove(`${style.imgActive}`));
    imgs[currentImg].classList.add(`${style.imgActive}`);
  }, [currentImg]);

  return (
    <>
      <div ref={images} className={style.banner}>
        <figure>
          <h2>BIENVENIDO</h2>
          <Image
            layout='fill'
            objectFit='cover'
            className={style.image}
            src={img1}
            priority
            alt='nelson-movies'
          />
        </figure>
        <figure>
          <h2>AL</h2>
          <Image
            layout='fill'
            objectFit='cover'
            className={style.image}
            src={img2}
            alt='nelson-movies'
          />
        </figure>
        <figure>
          <h2>CINE</h2>
          <Image
            layout='fill'
            objectFit='cover'
            className={style.image}
            src={img3}
            alt='nelson-movies'
          />
        </figure>
        <figure>
          <h2>DE</h2>
          <Image
            layout='fill'
            objectFit='cover'
            className={style.image}
            src={img4}
            alt='nelson-movies'
          />
        </figure>
        <figure>
          <h2>NELSON</h2>
          <Image
            layout='fill'
            objectFit='cover'
            className={style.image}
            src={img5}
            alt='nelson-movies'
          />
        </figure>
        <div className={style.action_btns}>
          <div onClick={before}>
            <span>{'<'}</span>
          </div>
          <div onClick={next}>
            <span>{'>'}</span>
          </div>
        </div>
      </div>
    </>
  );
}
