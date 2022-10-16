import React from "react"
import AddButton from "../Button/Add"
import styles from "./Main.module.scss"

function Main() {
	return (
		<main className={styles.main}>
			<div className={styles.itemsContainer}>
				<div className={styles.item}>
					<div className={styles.itemImg}>
						<img src="1.jpg" alt="hoodie xl" />
					</div>
					<div className={styles.itemCharacteristic}>
						<div className={styles.sizes}>
							<ul className={styles.sizeMenu}>
								<li className={`${styles.sizeItem} ${styles.sizeActive}`}>
									xl
								</li>
								<li className={styles.sizeItem}>xxl</li>
							</ul>
						</div>
						<div className={styles.colors}>
							<ul className={styles.colorMenu}>
								<li
									className={`${styles.colorItem} ${styles.colorActive}`}
								></li>
								<li className={styles.colorItem}></li>
								<li className={styles.colorItem}></li>
							</ul>
						</div>
					</div>
					<div className={styles.buy}>
						<div className={styles.price}>9.99$</div>
						<AddButton />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImg}>
						<img src="1.jpg" alt="hoodie xl" />
					</div>
					<div className={styles.itemCharacteristic}>
						<div className={styles.sizes}>
							<ul className={styles.sizeMenu}>
								<li className={`${styles.sizeItem} ${styles.sizeActive}`}>
									xl
								</li>
								<li className={styles.sizeItem}>xxl</li>
							</ul>
						</div>
						<div className={styles.colors}>
							<ul className={styles.colorMenu}>
								<li
									className={`${styles.colorItem} ${styles.colorActive}`}
								></li>
								<li className={styles.colorItem}></li>
								<li className={styles.colorItem}></li>
							</ul>
						</div>
					</div>
					<div className={styles.buy}>
						<div className={styles.price}>9.99$</div>
						<AddButton />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImg}>
						<img src="1.jpg" alt="hoodie xl" />
					</div>
					<div className={styles.itemCharacteristic}>
						<div className={styles.sizes}>
							<ul className={styles.sizeMenu}>
								<li className={`${styles.sizeItem} ${styles.sizeActive}`}>
									xl
								</li>
								<li className={styles.sizeItem}>xxl</li>
							</ul>
						</div>
						<div className={styles.colors}>
							<ul className={styles.colorMenu}>
								<li
									className={`${styles.colorItem} ${styles.colorActive}`}
								></li>
								<li className={styles.colorItem}></li>
								<li className={styles.colorItem}></li>
							</ul>
						</div>
					</div>
					<div className={styles.buy}>
						<div className={styles.price}>9.99$</div>
						<AddButton />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImg}>
						<img src="1.jpg" alt="hoodie xl" />
					</div>
					<div className={styles.itemCharacteristic}>
						<div className={styles.sizes}>
							<ul className={styles.sizeMenu}>
								<li className={`${styles.sizeItem} ${styles.sizeActive}`}>
									xl
								</li>
								<li className={styles.sizeItem}>xxl</li>
							</ul>
						</div>
						<div className={styles.colors}>
							<ul className={styles.colorMenu}>
								<li
									className={`${styles.colorItem} ${styles.colorActive}`}
								></li>
								<li className={styles.colorItem}></li>
								<li className={styles.colorItem}></li>
							</ul>
						</div>
					</div>
					<div className={styles.buy}>
						<div className={styles.price}>9.99$</div>
						<AddButton />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImg}>
						<img src="1.jpg" alt="hoodie xl" />
					</div>
					<div className={styles.itemCharacteristic}>
						<div className={styles.sizes}>
							<ul className={styles.sizeMenu}>
								<li className={`${styles.sizeItem} ${styles.sizeActive}`}>
									xl
								</li>
								<li className={styles.sizeItem}>xxl</li>
							</ul>
						</div>
						<div className={styles.colors}>
							<ul className={styles.colorMenu}>
								<li
									className={`${styles.colorItem} ${styles.colorActive}`}
								></li>
								<li className={styles.colorItem}></li>
								<li className={styles.colorItem}></li>
							</ul>
						</div>
					</div>
					<div className={styles.buy}>
						<div className={styles.price}>9.99$</div>
						<AddButton />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
