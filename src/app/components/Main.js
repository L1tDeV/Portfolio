import styles from './main.module.scss'

const Block1 = () => {
    return (
        <div className={styles.box}>
            <h2>Хочешь сайт,<wbr/> созданный с использо&shy;ванием<wbr/> современных web-технологий?</h2>
            <h2><span className={styles.box_1_txt}>Тогда тебе сюда.</span></h2>
        </div>
    )
}

const Block2 = () => {
    return(
        <div className={styles.box}>
            <h2>В интернете использую ник: <span className={styles.box_2_txt}>L1tDeV</span></h2>
        </div>
    )
}

const Contact = () => {
    return(
        <div className={styles.tble}>
            <div className={styles.el_tble}>
                <a href='https://t.me/smaf1_1' target='_blank'><img src='/telegram.svg'/></a>
            </div>
            <div className={styles.el_tble}>
                <a href='https://vk.com/n.lyutyi' target='_blank'><img src='/vk.svg'/></a>
            </div>
            <div className={styles.el_tble}>
                <a href='mailto:smaf1_1@mail.ru' target='_blank'><img src='/mail.svg'/></a>
            </div>
            <div className={styles.el_tble}>
                <a href='https://github.com/L1tDeV' target='_blank'><img src='/git.svg'/></a>
            </div>
        </div>
    )
}

const Block3 = () => {
    return(
        <div className={styles.box}>
            <h1>Contact <span className={styles.box_3_txt}>Me</span></h1>
            <Contact />
        </div>
    )
}

const MiniProfile = () => {
    return(
        <div className={styles.mini_profile}>
            <img src='/avatar.jpg' className={styles.avatar} />
            <h1>Hey, I’m Nikita Lyutyi,</h1>
            <h3>Front&shy;end-Deve&shy;loper</h3>
        </div>
    )
}

// <div className={styles.main_el}></div>

const Main = () =>{
    return (
        <main>
            <div className={styles.mob_vers}>
                <div className={styles.main_el}>
                    <MiniProfile />
                </div>
                <div className={styles.main_el}>
                    <Block1 />
                    <Block2 />
                    <Block3 />
                </div>
            </div>
            <div className={styles.pk_vers}>
                <div className={styles.main_el}>
                    <Block1 />
                    <Block2 />
                    <Block3 />
                </div>
                <div className={styles.main_el}>
                    <MiniProfile />
                </div>
            </div>
        </main>
    )
}

export default Main
