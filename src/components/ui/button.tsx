import styles from "./button.module.css";

interface ButtonProps {}

function Button({ children }: React.PropsWithChildren<ButtonProps>) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
