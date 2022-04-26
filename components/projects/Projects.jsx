import style from '/styles/componentStyle/projects.module.scss'
// import { dataProjectsPage } from '../../data'
// import Product from '../product/Product'
import { Fade } from 'react-reveal'
import Link from 'next/link'

function Projects () {
  return (
    <div className={style.projects}>
      <Fade top>
        <div className='pl-texts'>
          <h1 className={style.projectsTitle}>Create & inspire. It's Omar</h1>
          <p className={style.projectsDesc}>
            It's My Projects What I Make It In Along Days
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className='container'>
          <div className='row'>
            {/* {dataProjectsPage.map(project => (
              <>
                {project.id <= 6 ? (
                  <Product project={project} key={project.id} />
                ) : null}
              </>
            ))} */}
          </div>
        </div>
      </Fade>
      <Link href='/projects'>
        <a className={style.projectsLink}>Show More</a>
      </Link>
    </div>
  )
}

export default Projects
