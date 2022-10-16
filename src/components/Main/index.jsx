import React from "react"
import styles from "./Main.module.scss"

function Main() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<main>
			<div className={styles.itemsContainer}>
				<div className={styles.item}>
					<img src="../../assets/1.jpg" alt="" />
				</div>
			</div>
		</main>
	)
}

export default Main
