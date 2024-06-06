

import css from "../layout.module.scss";

export default function Footer() {
  return <footer className={css.footer}>
    <div className={css.footer_wrapper}>
      <p className="">&#169; Copyright Artem Poletsky 2024</p>
      <p className="">All rights reserved</p>
    </div>
  </footer>
}