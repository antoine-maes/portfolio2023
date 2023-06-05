import styles from '../styles/leftmenu.module.scss'
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'


export default function LeftMenu(props) {
  let ProjectCardsList = props.ProjectCardsList;
  let StateProjectActive = props.StateProjectActive;
  let IDContainerProjectCards = props.IDContainerProjectCards;
  let FunctionClickSelectProject = props.FunctionClickSelectProject;


  let ProjectCards = ProjectCardsList.map((item,key) => {
    return <div onClick={() => FunctionClickSelectProject(key)} key={key} id={"Project"+key} className={[styles.ProjectCard, StateProjectActive[key] ? styles.active : ""].join(' ')}>{item.title}</div>
  })
  
    return (
        <div className={styles.container}>
          <div className={styles.up}/>
          <div id={IDContainerProjectCards} className={styles.down}>{ProjectCards}</div>
          <div className={styles.footer}/>
        </div>
    )
}

