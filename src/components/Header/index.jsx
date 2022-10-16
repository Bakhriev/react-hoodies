import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp"
import styles from "./Header.module.scss"

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Solo</div>
			<div>
				<ul className={styles.menu}>
					<li className={styles.theme}>
						<DarkModeSharpIcon />
					</li>
					<li className={styles.favorites}>
						<FavoriteIcon />
					</li>
					<li className={styles.card}>
						<ShoppingBagIcon />
					</li>
					<li className={styles.profile}>
						<AccountCircleIcon />
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
