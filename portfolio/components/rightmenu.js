import styles from '@/styles/rightmenuu.module.scss'
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'




export default function RightMenu(props) {
  let Project = props.element;

  let IDContainerProjectsRightMenu = props.IDContainerProjectsRightMenu;
  let IDContentProjectsRightMenu = props.IDContentProjectsRightMenu;
  let IDDescriptionProjects = props.IDDescriptionProjects;

  let IDImageLeftProjects = props.IDImageLeftProjects;
  let IDImageUpProjects = props.IDImageUpProjects;
  let IDImageDownProjects = props.IDImageDownProjects;

  

    return (
        <div id={IDContainerProjectsRightMenu} className={styles.container}>
          <div className={styles.up}/>
          <div id={IDContentProjectsRightMenu}className={styles.down}>
            <div className={styles.ImagesContainer}>
              <div id={IDImageLeftProjects}className={styles.left}>
                <Image src={Project.images[0]} unoptimized alt="Galactisen" fill style={{objectFit:"contain", objectPosition:"center center"}}/>
              </div>
              <div className={styles.right}>
                <div id={IDImageUpProjects} className={styles.up}>
                  <Image src={Project.images[1]}  unoptimized alt="Galactisen" fill style={{objectFit:"cover", objectPosition:"center top"}}/>
                </div>
                <div id={IDImageDownProjects} className={styles.down}>
                  <Image src={Project.images[2]} unoptimized alt="Galactisen" fill style={{objectFit:"cover", objectPosition:"center top"}}/>
                </div>
              </div>
              <div id="overlaytop" className={styles.overlay}/>
            </div>
            <div className={styles.DescMoreContainer}>
              <div className={styles.DescContainer}>
                <span id={IDDescriptionProjects}>{Project.description}</span>
                <div id="overlayleft" className={styles.overlay}/>
              </div>
              <div className={styles.MoreContainer}>
                <span></span>
                {/* <span>en savoir plus</span> */}
                <div id="overlayright" className={styles.overlay}/>

              </div>
            </div>
          </div>
          <div className={styles.footer}/>
          
        </div>
    )
}

