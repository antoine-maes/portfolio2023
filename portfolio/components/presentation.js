import styles from '@/styles/Presentation.module.scss'
import { Power2,Expo,gsap,Sine, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';


export default function Presentation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        //Scroll when wheel on component 
        document.getElementById("PresentationTrigger").addEventListener('wheel', function(event) {document.getElementById("ScrollContainer").scrollBy(0, event.deltaY);});
        let axis = window.innerWidth > 768 ? "x" : "y";
        //GSAP
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    scroller: document.getElementById("ScrollContainer"),
                    trigger: "#PresentationTrigger",
                    //   markers: true,
                    start: '500px',
                    end: '+=2000px',
                    scrub: 1,
                    toggleActions: 'play none none reverse'
                },
            })
            .to("#PresentationTrigger", {display:"flex", duration : 0}, 0.1)
            .to("#background", {opacity : 0, duration : 0}, 0)
            .to("#circle1", {opacity: 0, scale: 5, duration : 0}, 0)
            .to("#circle2", {opacity: 0, scale: 5, duration : 0}, 0)
            .to("#circle3", {opacity: 0, scale: 5, duration : 0}, 0)

            .to("#background", {opacity : 1, duration : 0}, 0.1)
            .to("#circle1", {opacity: 1, scale: 5, duration : 0}, 0.1)
            .to("#circle2", {opacity: 1, scale: 5, duration : 0}, 0.1)
            .to("#circle3", {opacity: 1, scale: 5, duration : 0}, 0.1)

            .to("#circle1", {opacity: 1, scale: 1, duration : 1}, 0.2)
            .to("#circle2", {opacity: 1, scale: 1, duration : 1}, 0.2)
            .to("#circle3", {opacity: 1, scale: 1, duration : 1}, 0.2)
            


            // .from("#info-left", {ease :"back",x : -50, duration : 3}, 0.75)
            // .to("#info-left", {opacity : 1, duration : 3}, 0.75)
            // .from("#info-right", {flex:0, duration : 3}, 4)
            // .from("#info-right-span", {display:"none", duration : 0}, 5)
            // .to("#info-right", {opacity : 1, duration : 1}, 5)
            // .to("#info-left", {[axis]:"50%", duration : 1}, 6)

            .fromTo("#info-left", {opacity : 0,[axis] : '50%'}, {opacity : 1, [axis] : '50%', duration : 2.5, ease: Power4.easeInOut}, 0.75)
            .to("#hi", {marginTop:"-50px", duration : 2, ease: Power4.easeOut}, 3)
            .fromTo("#name", {opacity:0}, {opacity : 2, duration : 2}, 5)

            .to("#info-left", {[axis]:0, duration : 3, ease: Power4.easeInOut}, 9)
            .fromTo("#span1", {x:10, opacity:0}, {x:0,opacity : 1, duration : 3}, 11)
            .fromTo("#span2", {x:-10,opacity:0}, {x:0,opacity : 1, duration : 3}, 13)
            .fromTo("#span3", {x:10,opacity:0}, {x:0,opacity : 1, duration : 3}, 15)





            // .to("#info-right", {opacity : 1, duration :3}, 0.75)

            .to("#circle1", {y:-40, duration : 20}, 0.5)
            .to("#circle2", {y:-65, duration : 20}, 0.5)
            .to("#circle3", {y:-170, duration : 20}, 0.5)

            .to("#AnimationOut", {x:"-100%",ease: Power2.easeInOut, duration : 3}, 20)
        });
          return () => ctx.revert();
      }, []);
    return (
        <div id="PresentationTrigger" className={styles.container}>

            <div id="circle1" className={styles.circle1}/>
            <div id="circle2" className={styles.circle2}/>
            <div id="circle3" className={styles.circle3}/>

            <div id="background" className={styles.background}/>
            <div id="AnimationOut" className={styles.AnimationOut}/>

            <div className={styles.infoContainer}>
                <div id="info-left"className={styles.Hi}>
                    <span id="hi">HI !</span>
                    <span id="name">Je suis <b>Antoine</b></span>
                </div>
                <div id="info-right"className={styles.description}>
                    <span id="span1"> Je suis un <b>développeur Français</b> (Lille) qui se passionne pour le web depuis maintenant deux ans. J&apos;ai trouvé dans cette pratique <b>le parfait mélange entre créativité et logique</b>, et j&apos;adore travailler sur des projets qui me permettent de laisser libre cours à mon imagination tout en résolvant des problèmes techniques complexes.<br/><br/></span>
                    <span id="span2">Créer <b>une expérience unique</b> pour l&apos;utilisateur tout en respectant <b>les règles d&apos;UX et d&apos;UI</b> est pour moi un défi qui me passionne. C&apos;est la raison pour laquelle je me forme sur des <b>technologies très populaires</b> comme <b>React, NextJS</b> mais aussi sur des bibliothèques comme <b>ThreeJS</b> ou <b>GSAP</b>.<br/><br/></span>
                    <span id="span3">Je suis <b>enthousiasmé par les possibilités offertes par le développement de sites web</b>, et je suis constamment à la recherche de <b>nouveaux défis</b> et de nouvelles opportunités pour <b>développer mes compétences</b> et <b>élargir mes connaissances</b>. Si vous cherchez un développeur web passionné et compétent pour votre prochain projet, <b>je suis prêt à relever le défi</b>.</span>
                </div>
            </div>

        </div>
    )

    
}