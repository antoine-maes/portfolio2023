import styles from '@/styles/Landing.module.scss'
import { Back, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Landing() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                  trigger: "#home",
                  // markers: true,
                  start: '0px',
                  end: '+=500px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
                },
            })
            .to("#box", {ease : Back.easeIn.config(0.5) ,scale : 10, duration : 1,})
            .to("#box", {backgroundColor : '#303030', duration : 1.25}, 0.75)
            .to("#intro-text", { opacity : 0, duration : 0.5}, 0.5)
            .to("#intro-text", { display : "none", duration : 0}, 1)
            .to("#home", {display:"flex", duration : 0}, 2)
            .to("#box", {display : "none", duration : 0}, 2.1)
            // .to("#home", {display:"none", duration : 0}, 2.1)
          });
          return () => ctx.revert();
      }, []);

    return (
        <div id="home"className={styles.HomeContainer}>
            <div id="box"className={styles.box}/>
            <div className={styles.text}>
              <div className={styles.leftContainer}>
                <span id="intro-text" className={styles.left}>WEB  </span>
                <span id="intro-text" className={styles.left}>DEVELOPER </span>
              </div>
              <div className={styles.rightContainer}>
                <span id="intro-text" className={styles.right}>STUDENT</span>
                <span id="intro-text" className={styles.right}>PORTFOLIO</span>
              </div>
            </div>
        </div>
    )

    
}