import Image from 'next/image';
import logo from '../../assets/logo.png';
import NavBar from '../NavBar/NavBar';
import style from './header.module.css';

export default function Header() {
  return (
    <header className={style.header_desktop}>
      <div className={style.img}>
        <Image
          priority
          objectFit='cover'
          layout='fill'
          src={logo}
          alt='nelson-movies'
        />
      </div>
      <NavBar />
    </header>
  );
}
