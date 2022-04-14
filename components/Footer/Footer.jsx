import style from './footer.module.css';
import Image from 'next/image';

export default function Footer(params) {
  return (
    <footer className={style.footer}>
      <h3>Nelson Gamero</h3>
      <div className={style.socialLinks}>
        <a
          href='https://www.instagram.com/nelson_gamero/?hl=es'
          target='_blank'
          rel='noreferrer'>
          <Image
            className={style.img}
            src='/images/instagram.png'
            alt='instagram'
            width={40}
            height={40}
          />
        </a>
        <a
          href='https://www.youtube.com/channel/UCroh0uYr_ROlLesmHSC3Olg'
          target='_blank'
          rel='noreferrer'>
          <Image
            className={style.img}
            src='/images/youtube.png'
            alt='youtube'
            width={40}
            height={40}
          />
        </a>
        <a
          href='https://twitter.com/elGrone96'
          target='_blank'
          rel='noreferrer'>
          <Image
            className={style.img}
            src='/images/twitter.png'
            alt='twitter'
            width={40}
            height={40}
          />
        </a>
        <a
          href='https://www.twitch.tv/neruson_gamer'
          target='_blank'
          rel='noreferrer'>
          <Image
            className={style.img}
            src='/images/twitch.png'
            alt='twitch'
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className={style.footer_text}>
        <p>Diseño y desarrollo por Nelson gamero</p>
        <p>Web creada con Next JS</p>
      </div>
    </footer>
  );
}
