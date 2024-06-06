
import Link from "next/link";
import css from "../layout.module.scss";

export default function Header() {
  return <header className={css.header}>
    <div className={css.header_wrapper}>
      <div className={css.logo}>

        Your logo
      </div>
      <nav className={css.header_nav}>
        <Link className={css.header_link} href="/">Home</Link>
        <Link className={css.header_link} href="/game">Game</Link>
        <Link className={css.header_link} href="/feedback">Feedback</Link>
      </nav>
    </div>
  </header>
}