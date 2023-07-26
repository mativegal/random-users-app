import styles from './Header.module.css'

type HeaderProps = {
  toggleColors: () => void
  toggleSortByCountry: () => void
  restoreUsers: () => void
  setFilterCountries: (e: string) => void
}

const Header = ({
  toggleColors,
  toggleSortByCountry,
  restoreUsers,
  setFilterCountries,
}: HeaderProps) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Random Users Table</h1>
      <div className={styles.actions}>
        <button className={styles.button} onClick={toggleColors}>
          Toggle Colors
        </button>
        <button className={styles.button} onClick={toggleSortByCountry}>
          Sort by country
        </button>
        <button className={styles.button} onClick={restoreUsers}>
          Restore
        </button>
        <input
          placeholder='Search by country'
          onChange={(e) => setFilterCountries(e.target.value)}
        />
      </div>
    </header>
  )
}

export default Header
