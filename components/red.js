import styles from '../styles/test.module.scss'
import { Back, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

export default function Red() {
  


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let test = document.getElementById("test");
        let home = document.getElementById("home");
        console.log(test);
        console.log(home);


        home.addEventListener('wheel', function(e) {
            console.log(e.deltaY);  
            test.scrollBy(0, e.deltaY);
          
        });



    
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                  scroller: test,
                  trigger: "#home",
                  // markers: true,
                  start: '0px',
                  end: '+=500px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
                },
            })
            .to("#box", {scale : 2, duration : 1,})
           
          });
          return () => ctx.revert();
      }, []);

    return (
        <div id="home"className={styles.con}>
          <div id="box"className={styles.box}/>
            
        </div>
    )

    
}
