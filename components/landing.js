import styles from '../styles/Landing.module.scss'
import { Back,Power1, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

export default function Landing(){
    const trigger = useRef(null);
    const box = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);

    function ScrollAnim(){
        gsap.to("#ScrollContainer", {overflowY:"hidden"})
        gsap.to("#ScrollContainer", {duration : 6, scrollTo : {y : "2100", autoKill : false}})   
        gsap.to("#ScrollContainer", {delay: 6, overflowY:"scroll"}) 
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);
        
        var ts;
        trigger.current.addEventListener('touchstart', function (e){
            e.preventDefault();
            ts = e.touches[0].clientY;
        });

        trigger.current.addEventListener('touchend', function (e){
            var te = e.changedTouches[0].clientY;
            if(ts > te+5){
                ScrollAnim();
            }else if(ts < te-5){
                gsap.to("#ScrollContainer", {duration : 6, scrollTo : {y : "0", autoKill : false}}) 
            }
        });



        //Scroll when wheel on component
        trigger.current.addEventListener('wheel', function(event) {
            if (event.deltaY > 0) {
                ScrollAnim();
            }
            if(event.deltaY < 0){
                gsap.to("#ScrollContainer", {duration : 6, scrollTo : {y : "0", autoKill : false}}) 
            }
        });

        //GSAP
        let ctx = gsap.context(() => {
            gsap.to(box.current, {rotate:360, duration : 120, repeat : -1, ease : "none"})
            gsap.timeline({
                scrollTrigger: {
                  scroller: "#ScrollContainer",
                  trigger: trigger.current,
                  // markers: true,
                  start: '0px',
                  end: '+=500px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
                },
            })
            .to(box.current, {ease : Back.easeIn.config(0.5) ,scale : 10, duration : 1,})
            .to(box.current, {backgroundColor : '#303030', duration : 1}, 0.5)
            .to([text1.current, text2.current], { opacity : 0, duration : 0.5}, 0.5)
            .to([text1.current, text2.current], { display : "none", duration : 0}, 1)
            .to(trigger.current, {display:"flex", duration : 0}, 1)
            .to(box.current, {display : "none", duration : 0}, 1.5)
          });
          return () => ctx.revert();
      }, []);

    return (
        <div ref={trigger} className={styles.HomeContainer}>

            <div ref={box} className={styles.box}/>

            <div className={styles.text}>
                <span ref={text1} className={styles.left}>WEB<br/>DEVELOPER  </span>
                <span ref={text2} className={styles.right}>STUDENT<br/>PORTFOLIO</span>
            </div>
        </div>
    )

    
}
