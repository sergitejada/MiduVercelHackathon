import styles from "./card.module.css"

interface CardProps {}

function Card({ children }: React.PropsWithChildren<CardProps>) {
	return <div className={styles.card}>{children}</div>
}

export default Card
