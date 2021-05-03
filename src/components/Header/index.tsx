import styles from './styles.module.scss'

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="logo"/>
        <nav>
          <a className={styles.active}>HOME</a>
          <a>PRODUTOS</a>
        </nav>
      </div>
    </header>
  );
}