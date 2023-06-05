import Header from '../components/header'
import Landing from '../components/landing'
import Presentation from '../components/presentation'
import Projects from '../components/projects'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (

      <div id="main"className={styles.container}>
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
