import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import { Power4,Power1,Back,gsap } from 'gsap';
import HamburgerMenu from './hamburgermenu';
import Red from './red';



  
export default function Header() {
  const [isDisplayed, setDisplay] = useState(false);


  const toggleChecked = () => {
    const ham = document.getElementById("Hamburger");
    const SelectSection = document.getElementById("SelectSection");
    const SectionContainer = document.getElementById("SectionContainer");
    const SectionDetail = document.getElementById("SectionDetail");
    console.log(ham);

    setDisplay(value => !value);
    console.log(isDisplayed);
    if (isDisplayed) {
      let Display = gsap.timeline();
      Display.to("#line1, #line3", {y:0,rotate:0, duration: 0.3}, 0);
      Display.to("#linecenter", {width:"24px",ease: Back.easeOut.config(5), duration: 0.4},0);
      Display.to("#HamburgerContainer", {width:"24px", gap:"5px", duration: 0.2, delay: 0.2},0);

      Display.to(SelectSection, {opacity:0, duration:0.2},0);
      Display.to(SectionContainer, {opacity:0, x:50, duration:0.2},0);
      Display.to(SectionDetail, {opacity:0,ease:Power4.easeOut, duration:0.2},0)


      Display.to(ham, {opacity:0,ease: Power4.easeInOut, duration: 0.3},0.2);
      Display.to(ham, {display:"none", duration: 0},0.5);



    } 
    else {
      let DisplayOut = gsap.timeline();
      DisplayOut.to("#HamburgerContainer", {width:"27px", gap:"0px", duration: 0.2},0);
      DisplayOut.to("#linecenter", {width:"0", duration: 0.2},0);
      DisplayOut.to("#line1", {y:2.75 , rotate:45, duration: 0.3, delay: 0.1},0);
      DisplayOut.to("#line3", {y:-2.75, rotate:-45, duration: 0.3, delay: 0.1},0);

      DisplayOut.fromTo(ham, {display:"block", opacity:0, y:"50%"}, {display:"block", y:0, opacity:1, ease:Power4.easeOut, duration:0.7 },0)
      DisplayOut.fromTo(SelectSection, {opacity:0}, {opacity:1, ease:Power1.easeOut, duration:0.6},0.5);
      DisplayOut.fromTo(SectionContainer, {opacity:0,x:50}, {opacity:1, x:0, ease:Power1.easeOut, duration:0.6},0.5);
      DisplayOut.fromTo(SectionDetail, {opacity:0}, {opacity:1,ease:Power1.easeOut, duration:0.6},0.5)


    }
  };

  

  

  

  return (
    <div>
        <div className={styles.HeaderContainer}>
            <span className={styles.Logo}>ANTOINE MAES</span>
            <div className={styles.NavContainer}>
                <span className={styles.NavElement}>HOME</span>
                <span className={styles.NavElement}>ABOUT</span>
                <span className={styles.NavElement}>PROJECTS</span>
                <span className={styles.NavElement}>CONTACT</span>
            </div>
            <div id="HamburgerContainer" onClick={toggleChecked} className={styles.NavContainerHamburger}>
              <div id="line1"className={styles.Hamburger}/>
              <div id="linecenter"className={styles.Hamburger}/>
              <div id="line3"className={styles.Hamburger}/>
            </div>
        </div>
        <HamburgerMenu/>
  </div>
  )
}