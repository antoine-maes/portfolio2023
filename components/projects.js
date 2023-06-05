import styles from '../styles/projects.module.scss'
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'

import GalactisenPicture from '../public/galactisen.png'
import logoGalactisen from '../public/logoListe.png'

import adidartGame from '../public/adidart-game.png'
import adidartLogo from '../public/adidart-logo.svg'
import adidartMenu from "../public/adidart-menu.png"

import mtbLogo from '../public/MyTravelBuddy-logo.svg'
import mtbHome from '../public/MyTravelBuddy-home.png'
import mtbLieu from '../public/MyTravelBuddy-lieu.png'

import LeftMenu from './leftmenu';
import RightMenu from './rightmenu';

import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';


var ProjectCardsList = [
    { 
      id: 1,
      title: "Galactisen",
      description: "Création du site web du Bureau Des Etudiants (BDE) de l'ISEN Lille ayant pour thème l'espace.",
      images: [logoGalactisen, GalactisenPicture, GalactisenPicture]
    },
    {
      id: 2,
      title: "AdiDart",
      description: "Un jeu de flechettes connecté avec un écran à distance.",
      images: [adidartLogo, adidartMenu, adidartGame] 
    },
    {
      id: 3,
      title: "MyTravelBuddy",
      description: "Projet d'application ayant pour but de faciliter l'accès aux activités touristiques à Lille.",
      images: [mtbLogo, mtbHome, mtbLieu]
    },
    {
      id: 4,
      title: "Fridgy",
      description: "Projet d'application ayant pour but de limiter le gaspillage alimentaire chez les particuliers.",
      images: [logoGalactisen, GalactisenPicture, GalactisenPicture]
    },    
]

export default function Projects() {
  const [project, setProject] = useState(ProjectCardsList[0]);
  const [StateProjectActive, setActive] = useState([true , false , false , false]);
  const index = useRef(0);
  let direction = 0;

  //LeftMenu
  let IDContainerProjectCards = "IDContainerProjectCards";

  //RightMenu
  let IDContainerProjectsRightMenu = "IDContainerProjectsRightMenu";
  let IDContentProjectsRightMenu = "IDContentProjectsRightMenu";
  let IDDescriptionProjects = "IDDescriptionProjects";
  let IDImageDownProjects = "IDImageDownProjects";
  let IDImageUpProjects = "IDImageUpProjects";
  let IDImageLeftProjects = "IDImageLeftProjects";


  function MenuActive(id) {
    let StateProjectActive = [false , false , false , false];
    for(let i = 0; i < StateProjectActive.length; i++) {
      StateProjectActive[i] = i == id ? true : false;
    }
    setActive(StateProjectActive);
  }

  function changeProject(id, direction) {
      index.current = id + direction;
      if (index.current > 3){ index.current = 3}
      if (index.current < 0){ index.current = 0}
      setProject(ProjectCardsList[index.current])
      MenuActive(index.current)
  }

  function SelectProject(keyProject){
    direction = keyProject - index.current;
    changeProject(index.current, direction);
  }

  function ScrollAnim(){
    gsap.to("#ScrollContainer", {overflowY:"hidden"})
    gsap.to("#ScrollContainer", {duration : 3, scrollTo : {y : "2100", autoKill : false}})   
    gsap.to("#ScrollContainer", {delay: 3, overflowY:"scroll"}) 
}

  let scrollStatus = {
    wheeling: false,
    functionCall: false
  };
  let scrollTimer = false;
 
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);

      

      document.getElementById("ProjectsTrigger").addEventListener('wheel', function(event) {
        scrollStatus.wheeling = true;
        if (!scrollStatus.functionCall) {
          if (event.deltaY > 0) {
            changeProject(index.current, 1);
          }
          if (event.deltaY < 0){
            index.current == 0 ? ScrollAnim() : changeProject(index.current, -1);
          }
          scrollStatus.functionCall = true;
        }

        window.clearInterval(scrollTimer);
        scrollTimer = window.setTimeout(function() {
          scrollStatus.wheeling = false;
          scrollStatus.functionCall = false;
        }, 100); //set this millisecond to your liking

      });

      //GSAP
        let ctx = gsap.context(() => {
          gsap.timeline({
              scrollTrigger: {
                  scroller: document.getElementById("ScrollContainer"),
                  trigger: "#ProjectsTrigger",
                  // markers: true,
                  start: '2500px',
                  end: '+=1000px',
                  scrub: 1,
                  toggleActions: 'play none none reverse'
              },
          })
          .to("#ProjectsTrigger", {display:"flex", duration : 0}, 0.1)
          .from("#"+IDContainerProjectsRightMenu, {flex:0,ease: Power2.easeInOut, duration : 1}, 0.2)
          .from("#Title", {x:-40, opacity:0,   duration : 1.5}, 0.5)
          .from("#"+IDContainerProjectCards, {x:-40, opacity:0, display:"none", duration : 1}, 0.75)
          .from("#"+IDContentProjectsRightMenu,{x:40, opacity:0, display:"none", duration : 1}, 0.75)

        });
          return () => ctx.revert();
      }, []);

    return (
        <div id="ProjectsTrigger" className={styles.container}>

          <div id="Title"className={styles.ProjectsTitleContainer}>
            <span className={styles.ProjectsTitle}>PROJECTS</span>
            <span id="projectTitle"className={styles.ProjectsName}>{project.title}</span>
          </div>
          
          <div className={styles.Projectscontainer}>
            <LeftMenu FunctionClickSelectProject={SelectProject} IDContainerProjectCards={IDContainerProjectCards} StateProjectActive={StateProjectActive} ProjectCardsList={ProjectCardsList}/>
            <RightMenu IDImageLeftProjects={IDImageLeftProjects} IDImageUpProjects={IDImageUpProjects} IDImageDownProjects={IDImageDownProjects} IDContainerProjectsRightMenu={IDContainerProjectsRightMenu} IDContentProjectsRightMenu={IDContentProjectsRightMenu} IDDescriptionProjects={IDDescriptionProjects} element={project}/>
            <div className={styles.footer}/>
          </div>
        </div>
    )
}

