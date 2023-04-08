
import styles from '@/styles/box.module.scss'
import { Back, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';

import { useState, useEffect, useRef } from 'react';



export default function Box() {
  //get the width of the window

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
          gsap.timeline({
            scrollTrigger: {
              trigger: "#home",
              // markers: true,
              pin: true,
              start: '+=0px',
              end: '+=2000px',
              scrub: 1,
              toggleActions: 'play none none reverse'
            },
          })
          .to("#box", {ease : Back.easeIn.config(0.5) ,scale : 10, duration : 1,})
          .to("#box", {backgroundColor : '#303030', duration : 1.25}, 0.75)

          .to("#intro-text", { opacity : 0, duration : 0.5}, 0.5)
          .to("#intro-text", { display : "none", duration : 0}, 1)

          .to("#box", {display : "none", duration : 0}, 2)

          .to("#circle1", {scale : 5, opacity : 1, duration : 0}, 2)
          .to("#circle2", {scale : 5, opacity : 1, duration : 0}, 2)
          .to("#circle3", {scale : 5 ,opacity : 1, duration : 0}, 2)
          .to("#circle1", {scale : 1,duration : 1}, 2)
          .to("#circle2", {scale : 1,duration : 1}, 2)
          .to("#circle3", {scale : 1,duration : 1}, 2)

          .from("#info-left", {ease :"back",x : -50, opacity : 0, duration : 1}, 2.75)
          .to("#info-right", {opacity : 1, duration : 1}, 2.75)

          .to("#circle3", {y : -250 ,duration : 2}, 3)
          .to("#circle2", {y : -60 ,scale : 1.25, duration : 2}, 3)
          .to("#circle1", {y : -25 ,duration : 2}, 3)

          
      });
      return () => ctx.revert();
  }, []);
      


  return (
    <div className={styles.body}>
        <div id="home"className={styles.HomeContainer}>
            <div id="box"className={styles.box}/>
            <div className={styles.text}>
              <span id="intro-text" className={styles.left}>WEB  </span>
              <span id="intro-text" className={styles.left}>DEVELOPER </span>
              <span id="intro-text" className={styles.right}>STUDENT</span>
              <span id="intro-text" className={styles.right}>PORTFOLIO</span>
            </div>
        </div>
        <div id="circle1" className={styles.circle1}/>
        <div id="circle2" className={styles.circle2}/>
        <div id="circle3" className={styles.circle3}/>
        


        <div className={styles.infoContainer}>
          <div id="info-left"className={styles.Hi}><span>HI !</span></div>
          <div id="info-right"className={styles.description}><span>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec maximus, leo vitae dignissim egestas, tortor ante laoreet enim, sit amet varius ligula lorem nec est. Aliquam vel lacinia nisl, laoreet ullamcorper turpis. Nullam eget diam vel enim vulputate venenatis eu non felis. 
Donec efficitur molestie tortor, a gravida est suscipit ut. Nulla luctus orci metus, sed fermentum dui dictum id. Nullam tristique tincidunt dolor vitae scelerisque. Quisque tincidunt erat urna. Ut non turpis quis massa bibendum condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Pellentesque turpis enim, bibendum nec lobortis vel, consectetur eget turpis. Nullam ultrices magna magna, at dapibus magna ornare nec. Cras lacinia, mi in tincidunt faucibus, libero nisi gravida tortor, eget tempor elit lacus ac felis.
 Praesent fermentum, nibh vitae interdum sodales, libero ex sagittis odio, ut ornare mi eros dictum lectus. Aenean lorem odio, dictum eget cursus sed, cursus sed sapien.
            </span>
          </div>
        </div>
        <div className={styles.project}/>
    </div>
  )
}