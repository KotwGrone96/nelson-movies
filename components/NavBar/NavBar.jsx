import Link from 'next/link';
import style from './navBar.module.css';
import { useState, useRef } from 'react';
import openMenu from '../../assets/menu.svg';
import closeMenu from '../../assets/menu-close.svg';
import Image from 'next/image';

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const navResponsive = useRef();

  const viewMenu = () => {
    const nav = navResponsive.current;
    if (menu) {
      nav.style.left = '-100vw';
      setMenu(false);
      return;
    }
    nav.style.left = '0';
    setMenu(true);
  };

  return (
    <>
      <div className={style.btn_menu}>
        {menu ? (
          <Image
            layout='fill'
            objectFit='cover'
            src={closeMenu}
            alt='close-menu'
            onClick={viewMenu}
          />
        ) : (
          <Image
            layout='fill'
            objectFit='cover'
            src={openMenu}
            alt='open-menu'
            onClick={viewMenu}
          />
        )}
      </div>
      <nav className={style.nav_desktop}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/peliculas'>
            <a>Películas</a>
          </Link>
          <Link href='/cines'>
            <a>Cines</a>
          </Link>
          <Link href='/dulceria'>
            <a>Dulcería</a>
          </Link>
        </div>
      </nav>
      <div ref={navResponsive} className={style.nav_responsive}>
        <div>
          <Link href='/'>
            <a onClick={viewMenu}>Home</a>
          </Link>
          <Link href='/peliculas'>
            <a onClick={viewMenu}>Películas</a>
          </Link>
          <Link href='/cines'>
            <a onClick={viewMenu}>Cines</a>
          </Link>
          <Link href='/dulceria'>
            <a onClick={viewMenu}>Dulcería</a>
          </Link>
        </div>
      </div>
    </>
  );
}
