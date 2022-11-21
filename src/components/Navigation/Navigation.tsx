import React from 'react'
import { Link } from 'react-router-dom'
import styles from './_navigation.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.linkContainer}>
        <Link className={styles.navLink} to='/components'>
          Components
        </Link>
      </div>
      <div className={styles.title}>The Public Library</div>
    </div>
  )
}

export default Sidebar
