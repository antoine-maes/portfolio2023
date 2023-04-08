import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import { useState } from 'react'
import { Power4,Back,gsap } from 'gsap';



import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

  
export default function Header() {
  const [isDisplayed, setDisplay] = useState(false);
  const toggleChecked = () => {
    setDisplay(value => !value);
    console.log(isDisplayed);
    if (isDisplayed) {
      gsap.to("#line1, #line3", {y:0,rotate:0, duration: 0.3});

      gsap.to("#linecenter", {width:"24px",ease: Back.easeOut.config(5), duration: 0.4});
      gsap.to("#HamburgerContainer", {width:"24px", gap:"5px", duration: 0.2, delay: 0.2});
      
 
    } 
    else {
      gsap.to("#HamburgerContainer", {width:"27px", gap:"0px", duration: 0.2});
      gsap.to("#linecenter", {width:"0", duration: 0.2});
      gsap.to("#line1", {y:2.75 , rotate:45, duration: 0.3, delay: 0.1});
      gsap.to("#line3", {y:-2.75, rotate:-45, duration: 0.3, delay: 0.1});
    }
  };

  

  

  return (
    <div className={inter.className}>
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>ANTOINE MAES</span>
            <div className={styles.NavContainer}>
                <span className={styles.NavElement}>HOME</span>
                <span className={styles.NavElement}>PROJECTS</span>
                <span className={styles.NavElement}>CONTACT</span>
            </div>
            <div id="HamburgerContainer" onClick={toggleChecked} className={styles.NavContainerHamburger}>
              <div id="line1"className={styles.Hamburger}/>
              <div id="linecenter"className={styles.Hamburger}/>
              <div id="line3"className={styles.Hamburger}/>
            </div>
        </div>
  </div>
  )
}