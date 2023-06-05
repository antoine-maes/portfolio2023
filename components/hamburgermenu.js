import styles from '../styles/HamburgerMenu.module.scss'
import { useEffect, useState, useRef} from 'react'
import { Power4,Back,gsap } from 'gsap';
import React from 'react';


let Menu = [
  {name: "HOME", content : [""]},
  {name: "ABOUT", content : [""]},
  {name: "PROJECTS", content : ["GALACTISEN", "ADIDART", "MYTRAVELBUDDY", "FRIDGY"]},
  {name: "CONTACT", content : [""]}
]






export default function HamburgerMenu(props) {
  const home = React.useRef(null);
  const about = React.useRef(null);
  const projects = React.useRef(null);
  const contact = React.useRef(null);
  const scroller = React.useRef(null);

  const [SectionSelected, setSectionSelected] = useState(0);
  const sectionSelectedRef = useRef(SectionSelected);

  

  let Sommaire = Menu[SectionSelected].content.map((item,key) => {
    return ( Menu[SectionSelected].content.length > 1 ? <div className={styles.MenuSelection}key={key}>{item}</div> : <div key={key}className={styles.buttonContainer}><div key={key} className={styles.button}>GO TO {Menu[SectionSelected].name}</div></div>)
  })

  
function setOpacitySectionScroller(){
  let opacityHome = 1 - Math.abs(home.current.getBoundingClientRect().left-40)/window.innerWidth;
  let opacityAbout = 1 - Math.abs(about.current.getBoundingClientRect().left-40)/window.innerWidth;
  let opacityProjects = 1 - Math.abs(projects.current.getBoundingClientRect().left-40)/window.innerWidth;
  let opacityContact = 1 - Math.abs(contact.current.getBoundingClientRect().left-40)/window.innerWidth;
  gsap.to(home.current, {opacity: opacityHome});
  gsap.to(about.current, {opacity: opacityAbout});
  gsap.to(projects.current, {opacity: opacityProjects});
  gsap.to(contact.current, {opacity: opacityContact});
}

function scrollOnClickSection(){
  home.current.addEventListener("click", event => {
    console.log("home");
    scroller.current.scrollBy({left: home.current.getBoundingClientRect().left-40, behavior: 'smooth'});
  });
  about.current.addEventListener("click", event => {
    scroller.current.scrollBy({left: about.current.getBoundingClientRect().left-40, behavior: 'smooth'});
  });
  projects.current.addEventListener("click", event => {        
    scroller.current.scrollBy({left: projects.current.getBoundingClientRect().left-40, behavior: 'smooth'});
  });
  contact.current.addEventListener("click", event => {
    scroller.current.scrollBy({left: contact.current.getBoundingClientRect().left-40, behavior: 'smooth'});
  });

}

function SortPositionXSections(){
  let posX = [
    {id:0, value : home.current.getBoundingClientRect().left-40},
    {id:1, value :about.current.getBoundingClientRect().left-40},
    {id:2, value: projects.current.getBoundingClientRect().left-40},
    {id:3, value:contact.current.getBoundingClientRect().left-40}
  ];
  posX.sort(({ value: a }, { value: b }) => Math.abs(a - 40) - Math.abs(b - 40));
  return posX;
}

function selectSectionAnimation(posX){
  let tl = gsap.timeline();
  tl.to("#SectionDetail", {duration: 0.3, opacity: 0});
  tl.to("#SectionDetail", {duration:0.1});
  tl.call(() => {
    setSectionSelected(posX[0].id);
    sectionSelectedRef.current = posX[0].id;
  });
  tl.to("#SectionDetail", {duration:0.1});
  tl.to("#SectionDetail", {duration: 0.3, opacity: 1});
}


  useEffect(() => {
    setOpacitySectionScroller();
    scrollOnClickSection();
    
    let timer = null;
    scroller.current.addEventListener("scroll", event => {
      event.preventDefault();
        setOpacitySectionScroller();
        let posX = SortPositionXSections();
        if(posX[0].id != sectionSelectedRef.current){
          sectionSelectedRef.current = posX[0].id;
          selectSectionAnimation(posX);
        }

        if(timer !== null) { 
          clearTimeout(timer)
        }

        timer = setTimeout(function() {
          scroller.current.scrollBy({
            left : posX[0].value,
            behavior: 'smooth'
          });
        }, 150);
        
      });
  }, []);




  return(
    <div id="Hamburger" className={styles.container}>
        <div id="SelectSection"className={styles.top}>
          <span>SELECT SECTION</span>
        </div>
          <div ref={scroller} id="SectionContainer"className={styles.SectionContainer}>
            <div className={styles.Sections}>
              <div ref={home} className={styles.Section}>HOME</div> 
              <div ref={about} className={styles.Section}>ABOUT</div>
              <div ref={projects} className={styles.Section}>PROJECTS</div>
              <div ref={contact} className={styles.Section}>CONTACT</div>
            </div>
          </div>
        <div id="SectionDetail" className={styles.bot}>{Sommaire}</div>


    </div>

  )
}