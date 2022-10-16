import AddIcon from "@mui/icons-material/Add"
import styles from "./AddButton.module.scss"

function AddButton() {
	return (
		<button className={`${styles.addBtn} ${styles.btnActive}`}>
			<AddIcon />
		</button>
	)
}

export default AddButton
