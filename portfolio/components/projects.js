import styles from '@/styles/projects.module.scss'
import { Back, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Projects() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        let ctx = gsap.context(() => {
            gsap.timeline({
              scrollTrigger: {
                trigger: "#ProjectsTrigger",
                // markers: true,
                start: '1500px',
                end: '+=1000px',
                scrub: 1,
                toggleActions: 'play none none reverse'
              },
            })
            .to("#ProjectsTrigger", {display:"flex", duration : 0}, 0.1)
            .to("#test1", {x:"-75%", duration : 1}, 0.2)

     
          });
          return () => ctx.revert();
      }, []);
    return (
        <div id="ProjectsTrigger" className={styles.container}>

          <div id="test1"className={styles.TransitionContainer}/>
          

          <div className={styles.Projectscontainer}>
            <div className={styles.left}>Hello</div>
            <div className={styles.right}></div>
          </div>
        </div>
    )
}