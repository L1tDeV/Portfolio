'use client'
import { useState } from 'react'
import styles from './main.module.scss'

const MiniProfile = () => {
    return(
        <div>
            <div className={styles.mini_profile}>
                <img src='/avatar.jpg' className={styles.avatar} />
                <h1>Hey, I’m Nikita Lyutyi,</h1>
                <h3>Front&shy;end-Deve&shy;loper</h3>
            </div>
        </div>
    )
}

const Information = ({btn}) => {
    return(
        <div>
            <div className={styles.box}>
                <h2>Я начи&shy;нающий <span className={styles.green_txt}>Frontend-developer</span>. 
            В интернете я часто использую никнейм<span className={styles.yellow_txt}> SmaF1</span>. 
            Сейчас я изучаю языки програм&shy;мирования, исполь&shy;зуемые в web-&shy;разработке, такие как <span className={styles.blue_txt}>JavaScript</span>,
            <span className={styles.blue_txt}> React.js</span>, <span className={styles.blue_txt}>Next.js</span> и <span className={styles.blue_txt}>php</span>. 
            Буду рад сотрудни&shy;честву.</h2>
                {btn}
            </div>
        </div>
    )
}

const AboutMe = ({btn}) => {
    return(
    <>
        <div className={styles.pk_vers}>
            <div className={styles.el_tble}>
                <Information btn={btn}/>
            </div>
            <div className={styles.el_tble}>
                <MiniProfile />
            </div>
        </div>
        <div className={styles.mob_vers}>
            <div className={styles.el_tble}>
                <MiniProfile />
            </div>
            <div className={styles.el_tble}>
                <Information btn={btn}/>
            </div>
        </div>
    </>
    )
}

const Olimps = () => {
    return(
        <div className={styles.box_ach}>
            <h1>Олимпиады:</h1>
            <div className={styles.ach}>
                <h2>Финалист НТО по профилю <span className={styles.blue_txt}>“Финансовый инжиниринг”</span> (2023 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>Финалист НТО по профилю <span className={styles.blue_txt}>“Автоматизация бизнес-процессов”</span> (2024 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>Финалист НТО по профилю <span className={styles.blue_txt}>“Искусственный интеллект”</span> (2024 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>Финалист НТО по профилю <span className={styles.blue_txt}>“Программная инженерия в финансовых технологиях”</span> (2024 г.)</h2>
            </div>
            <a href='https://ntcontest.ru/'><button className={styles.nto_btn}>Что такое НТО?</button></a>
        </div>
    )
}

const Education = () => {
    return(
        <div className={styles.box_ach}>
            <h1>Образо&shy;вание</h1>
            <div className={styles.ach}>
                <h2>Среднее-общее (Красный аттестат) <span className={styles.green_txt}>ГОУ ЯО СШ №33</span></h2>
            </div>
        </div>
    )
}

const Konkurs = () => {
    return(
        <div className={styles.box_ach}>
            <h1>Конкурс цифровых портфолио “Талант НТО” в компе&shy;тенциях:</h1>
            <div className={styles.ach}>
                <h2>“Разработка бизнес-приложений” - <span className={styles.yellow_txt}>победитель</span> (2023 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>“Програм&shy;мирование на Python” - <span className={styles.yellow_txt}>победитель</span> (2023 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>“Искуствен&shy;ный интеллект” - <span className={styles.orange_txt}>призер</span> (2023 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>“Инженерия” - <span className={styles.yellow_txt}>победитель</span> (2024 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>“Програм&shy;мирование” - <span className={styles.yellow_txt}>победитель</span> (2024 г.)</h2>
            </div>
            <div className={styles.ach}>
                <h2>“Разработка бизнес-приложений” - <span className={styles.yellow_txt}>победитель</span> (2024 г.)</h2>
            </div>
        </div>
    )
}

const Achivements = ({btn}) => {
    return(
        <>
            <div className={styles.pk_vers}>
                <div className={styles.el_tble}>
                    <Olimps/>
                    {btn}
                </div>
                <div className={styles.el_tble}>
                    <Konkurs/>
                </div>
                <div className={styles.el_tble}>
                    <Education/>
                </div>
            </div>
            <div className={styles.mob_vers}>
                {btn}
                <Olimps/>
                <Konkurs/>
                <Education/>
            </div>
        </>
    )
}

const Main = () =>{
    const [position, usePosition] = useState(true)
    return (
        <main>
            {position && <AboutMe btn={<button className={styles.go_btn} onClick={() => usePosition(!position)}>Читать больше</button>} />}
            {!position && <Achivements btn={<div className={styles.back}><button className={styles.back_btn} onClick={() => usePosition(!position)}><img src='/back.png' className={styles.btn_img} /></button></div>} />}
        </main>
    )
}

export default Main
