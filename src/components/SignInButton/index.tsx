import { FiInstagram, FiX } from "react-icons/fi";
import styles from './styles.module.scss'

export function SignInButton () {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FiInstagram color="#04d361"/>
      Felipe Pontes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FiInstagram color="#eba418"/>
      Entre com Instagram
    </button>
  );
}