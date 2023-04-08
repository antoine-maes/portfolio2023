import styles from '@/styles/Home.module.scss'

import Header from '@/components/header'
import Landing from '@/components/landing'
import Presentation from '@/components/presentation'
import Projects from '@/components/projects'


export default function Home() {
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
