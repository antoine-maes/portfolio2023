import styles from '@/styles/Presentation.module.scss'
import { Expo,gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Presentation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                  trigger: "#PresentationTrigger",
                //   markers: true,
                  start: '500px',
                  end: '+=1000px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
                },
            })
            
            .to("#PresentationTrigger", {display:"flex", duration : 0}, 0.1)
            .to("#background", {opacity : 0, duration : 0}, 0)
            .to("#circle1", {opacity: 0, scale: 5, duration : 0}, 0)
            .to("#circle2", {opacity: 0, scale: 5, duration : 0}, 0)
            .to("#circle3", {opacity: 0, scale: 5, duration : 0}, 0)
            .to("#circle4", {opacity: 0, scale: 1, duration : 0}, 0)


            .to("#background", {opacity : 1, duration : 0}, 0.1)
            .to("#circle1", {opacity: 1, scale: 5, duration : 0}, 0.1)
            .to("#circle2", {opacity: 1, scale: 5, duration : 0}, 0.1)
            .to("#circle3", {opacity: 1, scale: 5, duration : 0}, 0.1)
            .to("#circle4", {opacity: 1, scale: 1, duration : 0}, 0.1)


            .to("#circle1", {opacity: 1, scale: 1, duration : 1}, 0.2)
            .to("#circle2", {opacity: 1, scale: 1, duration : 1}, 0.2)
            .to("#circle3", {opacity: 1, scale: 1, duration : 1}, 0.2)
            .to("#circle4", {opacity: 1, scale: 10, ease:Expo.easeIn, duration : 5.3}, 0.2)


            .from("#info-left", {ease :"back",x : -50, duration : 1}, 0.75)
            .to("#info-left", {opacity : 1, duration : 1}, 0.75)
            .to("#info-right", {opacity : 1, duration : 1}, 0.75)

            .to("#circle1", {y:-40, duration : 5}, 0.5)
            .to("#circle2", {y:-65, duration : 5}, 0.5)
            .to("#circle3", {y:-170, duration : 5}, 0.5)
            .to("#circle4", {top:"45vh", duration : 5}, 0.5)

            .to("#info-left", { opacity : 0, duration : 1}, 3.5)
            .to("#info-right", {opacity : 0, duration : 1}, 3.5)

            .to("#circle4", {zIndex: 4, duration : 0}, 4.5)

            .to("#circle4", {opacity: 1,backgroundColor : '#EAEAEA',duration : 1}, 4.5)



         
          });
          return () => ctx.revert();
      }, []);
    return (
        <div id="PresentationTrigger" className={styles.container}>

            <div id="circle1" className={styles.circle1}/>
            <div id="circle2" className={styles.circle2}/>
            <div id="circle3" className={styles.circle3}/>
            <div id="circle4" className={styles.circle4}/>

            <div id="background" className={styles.background}/>

            <div className={styles.infoContainer}>
                <div id="info-left"className={styles.Hi}>
                    <span>HI !</span>
                </div>
                <div id="info-right"className={styles.description}><span>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec maximus, leo vitae dignissim egestas, tortor ante laoreet enim, sit amet varius ligula lorem nec est. Aliquam vel lacinia nisl, laoreet ullamcorper turpis. Nullam eget diam vel enim vulputate venenatis eu non felis. 
                    Donec efficitur molestie tortor, a gravida est suscipit ut. Nulla luctus orci metus, sed fermentum dui dictum id. Nullam tristique tincidunt dolor vitae scelerisque. Quisque tincidunt erat urna. Ut non turpis quis massa bibendum condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Pellentesque turpis enim, bibendum nec lobortis vel, consectetur eget turpis. Nullam ultrices magna magna, at dapibus magna ornare nec. Cras lacinia, mi in tincidunt faucibus, libero nisi gravida tortor, eget tempor elit lacus ac felis.
                    Praesent fermentum, nibh vitae interdum sodales, libero ex sagittis odio, ut ornare mi eros dictum lectus. Aenean lorem odio, dictum eget cursus sed, cursus sed sapien.
                    </span>
                </div>
            </div>

        </div>
    )

    
}