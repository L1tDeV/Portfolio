import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Navig_el = ({src, alt, adress}) => {
    return(
        <div className={styles.nav_el}>
            <Link href={adress}>
                <img src = {src}
                    alt = {alt}
                    className={styles.nav_el_img} />
            </Link>
        </div>
    )
}

const Navigation = () => {
    return(
        <div className={styles.nav}>
            <Navig_el src = {'/main.png'} alt={'Home'} adress={'/'}/>
            <Navig_el src = {'/skill.png'} alt={'Skills'} adress={'/skills'}/>
            <Navig_el src = {'/info.png'} alt={'Info'} adress={'/info'}/>
        </div>
    )
}

const Logo_txt = () => {
    return(
        <div className={styles.logo_txt}>
            <h1>Welcome to my <span className={styles.main_wrd}>WebSite</span></h1>
        </div>
    )
}

// const {active, useActive} = useState(true)

const Header = () =>{
    return (
        <header>
            <Navigation />
            <Logo_txt />
        </header>
    )
}

export default Header