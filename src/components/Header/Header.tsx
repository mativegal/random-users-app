import styles from './Header.module.css'

type HeaderProps = {
  toggleColors: () => void
  restoreUsers: () => void
  setFilterCountries: (e: string) => void
}

const Header = ({
  toggleColors,
  restoreUsers,
  setFilterCountries,
}: HeaderProps) => {
  return (
    <header className={styles.container}>
      <div className={styles.actions}>
        <button className={styles.button} onClick={toggleColors}>
          Toggle Colors
        </button>

        <button className={styles.button} onClick={restoreUsers}>
          Restore
        </button>
        <input
          className={styles.searchInput}
          placeholder='Search by country'
          onChange={(e) => setFilterCountries(e.target.value)}
        />
      </div>
    </header>
  )
}

export default Header
