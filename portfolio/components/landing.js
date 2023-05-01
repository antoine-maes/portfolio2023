import styles from '@/styles/Landing.module.scss'
import { Back, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

export default function Landing(){
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      

        //Scroll when wheel on component
        document.getElementById("LandingTrigger").addEventListener('wheel', function(event) {document.getElementById("ScrollContainer").scrollBy(0, event.deltaY);});

        //GSAP
        let ctx = gsap.context(() => {
            gsap.to("#box", {rotate:360, duration : 120, repeat : -1, ease : "none"})
            gsap.timeline({
                scrollTrigger: {
                  scroller: document.getElementById("ScrollContainer"),
                  trigger: "#LandingTrigger",
                  // markers: true,
                  start: '0px',
                  end: '+=500px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
                },
            })
            .to("#box", {ease : Back.easeIn.config(0.5) ,scale : 10, duration : 1,})
            .to("#box", {backgroundColor : '#303030', duration : 1}, 0.5)
            .to("#intro-text", { opacity : 0, duration : 0.5}, 0.5)
            .to("#intro-text", { display : "none", duration : 0}, 1)
            .to("#LandingTrigger", {display:"flex", duration : 0}, 1)
            .to("#box", {display : "none", duration : 0}, 1.5)
          });
          return () => ctx.revert();
      }, []);

    return (
        <div id="LandingTrigger"className={styles.HomeContainer}>

            <div id="box"className={styles.box}/>

            <div className={styles.text}>
                <span id="intro-text" className={styles.left}>WEB<br/>DEVELOPER  </span>
                <span id="intro-text" className={styles.right}>STUDENT<br/>PORTFOLIO</span>
            </div>
        </div>
    )

    
}
