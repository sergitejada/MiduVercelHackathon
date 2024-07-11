import styles from "./button.module.css"

interface Props {
	children: React.ReactNode
}

function Button({ children }: Props) {
	return <button className={styles.button}>{children}</button>
}

export default Button
