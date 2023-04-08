import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/HomePage.module.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useState, useEffect, useRef } from 'react';



export default function HomePage() {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#box", {
      scaleX : 3,
      scaleY : 3,
      scrollTrigger: {
        scrub: true,
        trigger: ".HomeContainer",
        markers: true,
        start: 'top top',
        end: 'bottom middle',
      }
    });

    // gsap.to("#box", {
    //   scrollTrigger: {
    //     trigger: "#box",

    //     // markers: true,
    //     start: 'top 25%',
    //     end: 'bottom bottom',
    //   },
    //   scaleX:6,
    //   scaleY:6,
    //   duration: 2,
    // });
  }, []);
      


  return (
    <div className={styles.body}>
      <div className={styles.HomeContainer}>
        <div id="box"className={styles.box}/>

        <div className={styles.left}>
          <span>WEB</span>
          <span>DEVELOPER</span>
        </div>
        <div className={styles.right}>
          <span>STUDENT</span>
          <span>PORFOLIO</span>
        </div>
      </div>

      
  </div>
  )
}