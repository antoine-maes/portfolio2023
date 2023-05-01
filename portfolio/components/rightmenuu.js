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
        <div className={styles.container}>
          <div className={styles.up}/>

          <div className={styles.down}>

            <div className={styles.ImagesContainer}>
              <div className={styles.left}></div> 
            </div>

            <div className={styles.DescMoreContainer}>
              <div className={styles.DescContainer}></div>
              <div className={styles.MoreContainer}></div>
            </div>

          </div>
          <div className={styles.footer}/>
          
        </div>
    )
}

