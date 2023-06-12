import { header, link, logoImage } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img className={logoImage} src='/src/assets/logo.png' alt='Hacker News Logo' />
      <a className={link} href='/'>
        Hacker News
      </a>
    </nav>
  )
}
