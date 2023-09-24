import styles from './main.module.scss'

const BoxSkill = ({kid, name, perc}) =>{
	return(
	<div className={styles.box}>
        <div className={styles.skill}>
			<div className={styles.txt_skill}>
				<div>
					<h2>{name}</h2>
				</div>
				<div className={styles.right_txt}>
					<h3>{perc}%</h3>
				</div>
			</div>
			{kid}
		</div>
    </div>
	)
}

const Skill = ({name, perc}) => {
	if(name=='HTML5'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_green}><div class={styles.line_skill_html}></div></div>}/>
		)
	}
	else if(name=='JS'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_blue}><div class={styles.line_skill_js}></div></div>}/>
		)
	}
	else if(name=='php'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_green}><div class={styles.line_skill_php}></div></div>}/>
		)
	}
	else if(name=='Next.js'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_blue}><div class={styles.line_skill_next}></div></div>}/>
		)
	}
	else if(name=='GitHub'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_yellow}><div class={styles.line_skill_git}></div></div>}/>
		)
	}
	else if(name=='React.js'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_blue}><div class={styles.line_skill_react}></div></div>}/>
		)
	}
	else if(name=='Figma'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_yellow}><div class={styles.line_skill_figma}></div></div>}/>
		)
	}
	else if(name=='CSS'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_green}><div class={styles.line_skill_css}></div></div>}/>
		)
	}
	else if(name=='Python'){
		return(
			<BoxSkill name = {name} perc = {perc} kid = {<div className={styles.bord_skill_yellow}><div class={styles.line_skill_python}></div></div>}/>
		)
	}
}

const Main = () => {
    return(
        <main>
			<div className={styles.tble_el}>
				<Skill name={'HTML5'} perc={'70'} />
				<Skill name={'JS'} perc={'60'} />
				<Skill name={'php'} perc={'30'} />
			</div>
			<div className={styles.tble_el}>
				<Skill name={'Next.js'} perc={'50'} />
				<Skill name={'GitHub'} perc={'50'} />
				<Skill name={'React.js'} perc={'60'} />
			</div>
			<div className={styles.tble_el}>
				<Skill name={'Figma'} perc={'60'} />
				<Skill name={'CSS'} perc={'65'} />
				<Skill name={'Python'} perc={'60'} />
			</div>
        </main>
    )
}

export default Main