import Header from '../components/Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
    </div>
    </>
  )
}

export default Layout