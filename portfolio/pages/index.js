import styles from '@/styles/Home.module.scss'

import Header from '@/components/header'
import Landing from '@/components/landing'
import Presentation from '@/components/presentation'
import Projects from '@/components/projects'
import inobounce from "inobounce"


export default function Home() {
  inobounce.enable();

  return (
    <div className={styles.container}>
      <Header/>

      <div id="Landing">
        <Landing/>
      </div>   

      <div id="Presentation">
        <Presentation/>
      </div>

      <div id="Projects">
        <Projects/>
      </div>

    </div>
  )
}
